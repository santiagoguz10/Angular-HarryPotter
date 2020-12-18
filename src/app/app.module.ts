import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
//import { DashboardComponent } from './vistas/dashboard/dashboard.component';
//import { PersonajesComponent } from './vistas/personajes/personajes.component';
//import { EstudiantesComponent } from './vistas/estudiantes/estudiantes.component';
//import { ProfesoresComponent } from './vistas/profesores/profesores.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderComponent,
    routingComponents
    //DashboardComponent,
    //PersonajesComponent,
    //EstudiantesComponent,
    //ProfesoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
