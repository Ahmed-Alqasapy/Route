import { Routes } from '@angular/router';
import { StudentListComponent } from './_students/student-list/student-list.component';
import { StudentDetailsComponent } from './_students/student-details/student-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentsComponent } from './departments/departments.component';
import { StudentEditComponent } from './_students/student-edit/student-edit.component';
import path from 'path';

export const routes: Routes = [

    { 
        path: 'students', 
        component: StudentListComponent ,
        title: 'Students List',
        children: [
            {
                path:'Details/:id',
                component: StudentDetailsComponent,
                title: 'Student Details'
                
            },
            {
                path:'Edit/:id',
                component: StudentEditComponent,
                title: 'Edit Student'
            }
        ]
    },
    // { 
    //     path: 'students/Details/:id', 
    //     component: StudentDetailsComponent 
    // },
    // {
    //     path: 'students/Edit/:id',
    //     component: StudentEditComponent
    // },
  
    

    {
        path: '', 
        redirectTo: 'students', 
        pathMatch: 'full'
    },
    {
        path: 'departments',
        component:DepartmentsComponent,
        title: 'Departments List'
    },
    {
        path: 'department/Details/:id',
        component:DepartmentsComponent,
        title
: 'Department Details'
    },
    {
        path: 'department/Edit/:id',
        component:DepartmentsComponent,
        title: 'Edit Department'
    },

    

    {
        path: '**',
        component:PageNotFoundComponent
    }
    

];
