import { Component,Input, OnInit } from '@angular/core';
import { Student } from '../../student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {

 
  students:Student[] = [

    { id: 1, name: 'Ahmed', age: 22},
    { id: 2, name: 'Mohamed', age: 21},
    { id: 3, name: 'Mai', age: 24},
    { id: 4, name: 'Rania', age: 25},
    { id: 5, name: 'Ola', age: 25},
  ];
  constructor(public ar:ActivatedRoute) { 

    this.ar.snapshot.params['id'];
    // this.ar.params.subscribe(s=>this.students.find(s=>s.id === Number(s['id'])))

  }

  ngOnInit():void {


    const studentId = Number(this.ar.snapshot.params['id']);

    const student = this.students.find(s => s.id === studentId);
    if (student) {
      this.std = student;
    } else {
      console.error('Student not found!');
    }





  }
//Need Servie Herrrrre


   std: Student = new Student();
}
