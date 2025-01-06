import { Component } from '@angular/core'; 
import { CitasService } from '../services/citas.service';
import { Location } from '@angular/common'; // Importar para la navegación

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: false
})
export class GestionCitasPage {
  nuevaFrase: string = '';
  nuevoAutor: string = '';
  citas: { frase: string; autor: string }[] = [];

  constructor(private citasService: CitasService, private location: Location) {
    this.citas = this.citasService.obtenerCitas();
  }

  agregarCita() {
    if (this.nuevaFrase && this.nuevoAutor) {
      this.citasService.agregarCita(this.nuevaFrase, this.nuevoAutor);
      this.nuevaFrase = '';
      this.nuevoAutor = '';
      this.citas = this.citasService.obtenerCitas(); // Actualizar la lista de citas inmediatamente
    }
  }

  eliminarCita(cita: { frase: string; autor: string }) {
    this.citasService.eliminarCita(cita);
    this.citas = this.citasService.obtenerCitas(); // Actualizar la lista de citas inmediatamente
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
