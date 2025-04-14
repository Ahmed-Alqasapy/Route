import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './_students/student-list/student-list.component';
import { StudentDetailsComponent } from './_students/student-details/student-details.component';
import { StudentEditComponent } from './_students/student-edit/student-edit.component';
import { FormsModule } from '@angular/forms';
import { DepartmentsComponent } from './departments/departments.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,StudentListComponent,StudentDetailsComponent, StudentEditComponent,CommonModule,FormsModule,DepartmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentDepartmentPage';
}
