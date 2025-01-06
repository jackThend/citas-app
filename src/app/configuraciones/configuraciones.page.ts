import { Component } from '@angular/core';
import { CitasService } from '../services/citas.service';
import { Location } from '@angular/common'; // Importar para la navegación

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: false
})
export class ConfiguracionesPage {
  borrarCitasEnInicio: boolean = false;

  constructor(private citasService: CitasService, private location: Location) {}

  toggleBorrarCitas() {
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
