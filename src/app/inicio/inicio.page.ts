import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitasService } from '../services/citas.service';
import { ConfiguracionService } from '../services/configuracion.service'; // Importar el servicio de configuración
import { Location } from '@angular/common'; // Importación para la navegación

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {
  cita: string = '';
  autor: string = '';
  mostrarCita: boolean = true;

  constructor(
    private router: Router,
    private citasService: CitasService,
    private configuracionService: ConfiguracionService, // Servicio para la configuración
    private location: Location
  ) {}

  async ngOnInit() {
    // Consultar la configuración para determinar si se debe mostrar la cita
    const borrarCitasEnInicio = await this.configuracionService.getBorrarCitasInicio();
    this.mostrarCita = !borrarCitasEnInicio;

    // Si se debe mostrar la cita, cargar una cita aleatoria
    if (this.mostrarCita) {
      this.mostrarCitaAleatoria();
    }
  }

  irAGestionCitas() {
    this.router.navigate(['/gestion-citas']);
  }

  irAConfiguraciones() {
    this.router.navigate(['/configuraciones']);
  }

  mostrarCitaAleatoria() {
    const citaAleatoria = this.citasService.obtenerCitaAleatoria();
    this.cita = citaAleatoria.frase;
    this.autor = citaAleatoria.autor;
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
