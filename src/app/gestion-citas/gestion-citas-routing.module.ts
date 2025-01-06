import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCitasPage } from './gestion-citas.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCitasPageRoutingModule {}
