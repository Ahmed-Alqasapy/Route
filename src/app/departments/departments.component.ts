


import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../_services/department.service';
import { Department } from '../_model/department';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class DepartmentsComponent implements OnInit {

  departments: Department[] = [];
  newDepartment: Department = { id: 0, name: '' };
  isEditMode = false;

  selectedDepartment: Department | null = null; // For details view

  constructor(private departService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departments = this.departService.getAllDepartments();
  }

  editDepartment(department: Department) {
    this.newDepartment = { ...department };
    this.isEditMode = true;
  }

  deleteDepartment(department: Department) {
    this.departService.deleteDepartment(department);
    this.loadDepartments();
  }

  saveDepartment() {
    if (this.isEditMode) {
      this.departService.updateDepartment(this.newDepartment);
    } else {
      this.departService.addDepartment(this.newDepartment);
    }
    this.resetForm();
    this.loadDepartments();
  }

  resetForm() {
    this.newDepartment = { id: 0, name: '' };
    this.isEditMode = false;
  }

  // 👇 New method to view department details
  showDepartmentDetails(id: number) {
    const dept = this.departService.getDepartmentById(id);
    this.selectedDepartment = dept ? dept : null;
  }
}
