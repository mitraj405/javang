// import { Component } from '@angular/core';
// import { Employee } from '../employee';
// import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { EmployeeService } from '../employee.service';
// import { Router } from '@angular/router';
// import { first } from 'rxjs';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-create-employee',
//   standalone: true,
//   imports: [FormsModule,ReactiveFormsModule,CommonModule],
//   templateUrl: './create-employee.component.html',
//   styleUrl: './create-employee.component.css'
// })
// export class CreateEmployeeComponent {
//   employee: Employee = new Employee();
//   userForm: FormGroup;
//   isFormSubmitted: boolean = false;
  
//   constructor(private employeeService: EmployeeService,private router: Router){
//     this.userForm = new FormGroup({
//       firstname: new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z]+$")   ,Validators.minLength(1)],),
//       lastname: new FormControl("",[Validators.required, Validators.pattern("^[a-zA-Z]+$")   ,Validators.minLength(1)],),
//       emailid: new FormControl("",[Validators.required,Validators.email]),
//       phone: new FormControl('', [Validators.required, Validators.pattern('^\\+?[1-9]\\d{1,14}$')]), // E.164 format
//       password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}')]) // Strong password
  
//     });
//   }

//   saveEmployee(){
//     this.employeeService.createEmployee(this.employee).subscribe(data => {console.log(data);this.goToEmployeeList();},
//     error => console.log(error));
//   }
//   goToEmployeeList(){
//     this.router.navigate(['/employees']);
//   }
//   onSubmit() {
//     debugger;
//     this.isFormSubmitted = true; // Mark the form as submitted to trigger validation feedback
//     if (this.userForm.valid) {
//       // Update the employee model with the form values
//       this.employee = this.userForm.value;
      
//       // Now saveEmployee will send the updated employee object
//       this.saveEmployee();
//       console.log("Form is valid and data is submitted");
//     } else {
//       console.log("Form is not valid");
//     }
//   }
  
// }


import { Component } from '@angular/core';
import { Employee } from '../employee';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();
  userForm: FormGroup;
  isFormSubmitted: boolean = false;
  
  constructor(private employeeService: EmployeeService, private router: Router){
    this.userForm = new FormGroup({
      firstname: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(1)]),
      lastname: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]+$"), Validators.minLength(1)]),
      emailid: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\d{10}$')]), // Exactly 10 digits
      password: new FormControl('', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.maxLength(16),
        Validators.pattern('^(?=.*[A-Z]).*$') // At least one uppercase letter
      ]) // Length from 8 to 16 with one uppercase letter
    });
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {console.log(data); this.goToEmployeeList();},
    error => console.log(error));
  }
  
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit() {
    this.isFormSubmitted = true; // Mark the form as submitted to trigger validation feedback
    if (this.userForm.valid) {
      // Update the employee model with the form values
      this.employee = this.userForm.value;
      
      // Now saveEmployee will send the updated employee object
      this.saveEmployee();
      console.log("Form is valid and data is submitted");
    } else {
      console.log("Form is not valid");
    }
  }
}
