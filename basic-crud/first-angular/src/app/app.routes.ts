import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

export const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },  // Redirects to the employee list as the default route
  { path: 'employees', component: EmployeeListComponent },  // Employee list route
  { path: 'createemployee', component: CreateEmployeeComponent }  // Route to create a new employee
];
