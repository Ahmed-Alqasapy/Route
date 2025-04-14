import { Injectable } from '@angular/core';
import { Department } from '../_model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments: Department[] = [
    { id: 1, name: 'Computer Science', description: 'CS Department' },
    { id: 2, name: 'Mathematics', description: 'Math Department' },
    { id: 2, name: 'Mathematics', description: 'Math Department' },
    { id: 3, name: 'Physics', description: 'Physics Department' },
    { id: 3, name: 'Physics', description: 'Physics Department' },
    { id: 4, name: 'Chemistry', description: 'Chemistry Department' },
  ];
  getAllDepartments(): Department[] {
    return this.departments;
  }
  addDepartment(department: Department): void {
    this.departments.push(department);
  }
  updateDepartment(department: Department): void {
    const index = this.departments.findIndex((d) => d.id === department.id);
    if (index !== -1) {
      this.departments[index] = department;
    }
  }
  deleteDepartment(department: Department): void {
    const index = this.departments.findIndex((d) => d.id === department.id);
    if (index !== -1) {
      this.departments.splice(index, 1);
    }
  }

  getDepartmentById(id: number): Department | undefined {
    return this.departments.find(d => d.id === id);
  }
  constructor() { }
}
