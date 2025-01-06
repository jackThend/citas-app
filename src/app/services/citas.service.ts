import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CitasService {
  private citas: { frase: string; autor: string }[] = [
    { frase: 'El conocimiento es poder.', autor: 'Francis Bacon' },
    { frase: 'La vida es un sueño.', autor: 'Calderón de la Barca' },
    { frase: 'Pienso, luego existo.', autor: 'René Descartes' },
  ];

  private borrarCitasEnInicio = new BehaviorSubject<boolean>(false);
  borrarCitasEnInicio$ = this.borrarCitasEnInicio.asObservable();

  obtenerCitas() {
    return this.citas;
  }

  obtenerCitaAleatoria() {
    const indice = Math.floor(Math.random() * this.citas.length);
    return this.citas[indice];
  }

  agregarCita(frase: string, autor: string) {
    this.citas.push({ frase, autor });
  }

  eliminarCita(cita: { frase: string; autor: string }) {
    this.citas = this.citas.filter((c) => c !== cita);
  }

  setBorrarCitasEnInicio(valor: boolean) {
    this.borrarCitasEnInicio.next(valor);
  }
}
