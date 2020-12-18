import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent  {
  showAge:any;
  title ='Hogwarts';
  students:any;

  constructor(service:ApiService ){
    service.getAllStudents()
           .subscribe((data:any) => {
             console.log("data",data)
              this.students = data;
           });
  }

  addItem()
  {
  //  this.items.push('nuevo item');
  }

  deleteItem(index:number)
  {
    //this.items.splice(index,1);
  }

  ageCalculator(){
    if(this.students.dateOfBirth){
      const convertAge = new Date(this.students.dateOfBirth);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }
  }

}
