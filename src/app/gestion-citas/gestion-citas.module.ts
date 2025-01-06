import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GestionCitasPageRoutingModule } from './gestion-citas-routing.module';
import { GestionCitasPage } from './gestion-citas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCitasPageRoutingModule
  ],
  declarations: [GestionCitasPage] // Declaración del componente
})
export class GestionCitasPageModule {}
