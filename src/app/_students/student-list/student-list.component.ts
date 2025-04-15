import { Component } from '@angular/core';
import { Student } from '../../student';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentEditComponent } from '../student-edit/student-edit.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [CommonModule,StudentDetailsComponent,StudentEditComponent,RouterLink,RouterOutlet],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  // private baseUrl = 'https://localhost:7069/api/student';

  students:Student[] = [

    { id: 1, name: 'Ahmed', age: 22},
    { id: 2, name: 'Mohamed', age: 21},
    { id: 3, name: 'Mai', age: 24},
    { id: 4, name: 'Rania', age: 25},
    { id: 5, name: 'Ola', age: 25},
  ];


  
  selectedStudent: Student = new Student();

  onDetailsClick(student: Student): void {
    this.selectedStudent = student;
    this.showDetails = true;
  }

  showDetails: boolean = false;
  

  editstudent : Student = new Student();
  showEdit: boolean = false;

  onEditClick(student: Student): void {
    this.editstudent = { ...student }; 
    this.showEdit = true;
  }

  updateStudent(updatedStudent: Student) {
    const index = this.students.findIndex(s => s.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] .age= updatedStudent.age;
      this.students[index].name = updatedStudent.name;
      this.students[index].id = updatedStudent.id;
    }
  }

  deleteStudent(id:number|undefined){
    const studentIndex = this.students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
      this.students.splice(studentIndex, 1);
    }
  
  }


}
