import { Personaje } from './../../modelos/personaje.model';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent{

  casaSeleccionada:string="";

  casaListado = [
    { casaNombre: "Slytherin" },
    { casaNombre: "Gryffindor" },
    { casaNombre: "Ravenclaw" },
    { casaNombre: "Hufflepuff" },
  ];

  personajes:any;

  constructor(public service:ApiService) {
  }

  OnHouseChange(){
        this.service.getPersonajesItem(this.casaSeleccionada)
    .subscribe((data:any) => {
      console.log("data",data)
       this.personajes= data;
    });

    console.log("Esta es la casa", this.casaSeleccionada)
  }
}
