import { ProfesoresComponent } from './vistas/profesores/profesores.component';
import { EstudiantesComponent } from './vistas/estudiantes/estudiantes.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { PersonajesComponent } from './vistas/personajes/personajes.component';
import {  } from './vistas/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'dashboard' , pathMatch:'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'profesores', component:ProfesoresComponent},
  {path: 'estudiantes', component:EstudiantesComponent},
  {path: 'personajes', component:PersonajesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,ProfesoresComponent,EstudiantesComponent,PersonajesComponent]
