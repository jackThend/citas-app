import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule) },
  { path: 'gestion-citas', loadChildren: () => import('./gestion-citas/gestion-citas.module').then(m => m.GestionCitasPageModule) },
  { path: 'configuraciones', loadChildren: () => import('./configuraciones/configuraciones.module').then(m => m.ConfiguracionesPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
