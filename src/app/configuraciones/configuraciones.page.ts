import { Component, OnInit } from '@angular/core';
import { CitasService } from '../services/citas.service';
import { Location } from '@angular/common'; // Importar para la navegación
import { ConfiguracionService } from '../services/configuracion.service'; // Importar el servicio de configuración

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: false
})
export class ConfiguracionesPage implements OnInit {
  borrarCitasEnInicio: boolean = false;

  constructor(
    private citasService: CitasService,
    private configuracionService: ConfiguracionService, // Inyectar el servicio de configuración
    private location: Location
  ) {}

  async ngOnInit() {
    // Obtener el estado inicial desde Preferences
    this.borrarCitasEnInicio = await this.configuracionService.getBorrarCitasInicio();
  }

  async toggleBorrarCitas() {
    // Guardar la configuración en Preferences
    await this.configuracionService.setBorrarCitasInicio(this.borrarCitasEnInicio);
    // También actualizar el servicio de citas si es necesario
    this.citasService.setBorrarCitasEnInicio(this.borrarCitasEnInicio);
  }

  // Función para ir hacia atrás
  goBack() {
    this.location.back();
  }

  // Función para ir hacia adelante
  goForward() {
    history.forward();
  }
}
