import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private CONFIG_KEY = 'borrarCitasInicio';

  constructor() {}

  // Guardar configuración
  async setBorrarCitasInicio(valor: boolean): Promise<void> {
    await Preferences.set({
      key: this.CONFIG_KEY,
      value: JSON.stringify(valor)
    });
  }

  // Obtener configuración
  async getBorrarCitasInicio(): Promise<boolean> {
    const { value } = await Preferences.get({ key: this.CONFIG_KEY });
    return value ? JSON.parse(value) : false; // Valor por defecto: false
  }
}
