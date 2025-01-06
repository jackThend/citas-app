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
  mensajeExito: string = ''; // Variable para el mensaje de éxito

  constructor(private citasService: CitasService, private location: Location) {
    this.citas = this.citasService.obtenerCitas();
  }

  agregarCita(citaForm: any) {
    if (citaForm.valid) {
      this.citasService.agregarCita(this.nuevaFrase, this.nuevoAutor);
      this.nuevaFrase = '';
      this.nuevoAutor = '';
      this.citas = this.citasService.obtenerCitas(); // Actualizar la lista de citas inmediatamente
      this.mensajeExito = 'Cita ingresada correctamente'; // Mostrar mensaje de éxito

      // Reiniciar el formulario para evitar mensajes de error
      citaForm.resetForm();

      setTimeout(() => (this.mensajeExito = ''), 3000); // Ocultar el mensaje después de 3 segundos
    }
  }

  eliminarCita(cita: { frase: string; autor: string }) {
    this.citasService.eliminarCita(cita);
    this.citas = this.citasService.obtenerCitas(); // Actualizar la lista de citas inmediatamente
  }

  resetMensajes() {
    this.mensajeExito = ''; // Resetear el mensaje de éxito si se vuelve a escribir
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
