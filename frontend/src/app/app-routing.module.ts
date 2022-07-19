import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAdopcionComponent } from './components/crear-adopcion/crear-adopcion.component';


import { ListarAdopcionesComponent } from './components/listar-adopciones/listar-adopciones.component';

const routes: Routes = [
  { path: '', component: ListarAdopcionesComponent },
  { path: 'crear-adopcion', component: CrearAdopcionComponent},
  { path: 'editar-adopcion/:id', component: CrearAdopcionComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
