import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CitasService } from '../services/citas.service';
import { Location } from '@angular/common'; // Importación para la navegación

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage {
  cita: string = '';
  autor: string = '';
  mostrarCita: boolean = true;

  constructor(private router: Router, private citasService: CitasService, private location: Location) {
    this.mostrarCitaAleatoria();
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

  ngOnInit() {
    this.citasService.borrarCitasEnInicio$.subscribe((valor) => {
      this.mostrarCita = !valor;
    });
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
