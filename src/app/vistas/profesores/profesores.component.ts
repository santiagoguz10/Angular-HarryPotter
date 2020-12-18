import { Product } from './../../../../../Platzi/Platzi-Store/src/app/product.model';
import { ApiService } from './../../servicios/api/api.service';
import { Profesor } from '../../modelos/profesor.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.scss']
})
export class ProfesoresComponent {

  showAge:any;
  title ='Hogwarts';
  profesors:any;

  constructor(service:ApiService ){
    service.getAllProfesores()
           .subscribe((data:any) => {
             console.log("data",data)
              this.profesors = data;
           });

  }

}
