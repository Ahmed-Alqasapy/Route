import { Component, Input } from '@angular/core';
import { Student } from '../../student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  imports: [CommonModule,FormsModule],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css'
})

export class StudentEditComponent {
   
  students:Student[] = [

    { id: 1, name: 'Ahmed', age: 22},
    { id: 2, name: 'Mohamed', age: 21},
    { id: 3, name: 'Mai', age: 24},
    { id: 4, name: 'Rania', age: 25},
    { id: 5, name: 'Ola', age: 25},
  ];

constructor(public ar:ActivatedRoute , public router:Router) {
  
      this.ar.snapshot.params['id'];
    }


  ngOnInit():void {
    const studentId = Number(this.ar.snapshot.params['id']);
    const student = this.students.find(s => s.id === studentId);
    if (student) {
      this.estd = student;
    } else {
      console.error('Student not found!');
    }

  }
  
  sStudent:boolean = true;
  @Input()
  estd:Student = new Student();

  @Output() 
  onstudentUpdated = new EventEmitter<Student>(); 



  saveStudent() {
    this.onstudentUpdated.emit(this.estd); 
    this.router.navigate(['/students']);
    console.log(this.estd);
    // this.students.push(this.estd);
    this.sStudent = false;


  }
}
