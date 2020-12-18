import { environment } from './../../../environments/environment';
import { ResponseI } from './../../modelos/response.interface';
import { Profesor } from '../../modelos/profesor.model';
import { Personaje } from '../../modelos/personaje.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {} from '../../modelos/profesor.model';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllProfesores()
  {
    return this.http.get(environment.api + 'api/characters/staff');
  }

  getAllStudents()
  {
    return this.http.get(environment.api + 'api/characters/students');
  }

  getPersonajesItem(casa:string)
  {
    return this.http.get(environment.api + 'api/characters/house/'+ casa);
  }

}


