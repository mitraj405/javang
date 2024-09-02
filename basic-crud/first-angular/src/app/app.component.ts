// // import { Component } from '@angular/core';
// // import { RouterOutlet } from '@angular/router';
// // import { EmployeeListComponent } from './employee-list/employee-list.component';

// // @Component({
// //   selector: 'app-root',
// //   standalone: true,
// //   imports: [RouterOutlet,EmployeeListComponent],
// //   templateUrl: './app.component.html',
// //   styleUrl: './app.component.css'
// // })
// // export class AppComponent {
// //   title = 'first-angular';
// // }



// import { Component } from '@angular/core';
// import { RouterModule, RouterOutlet,Routes } from '@angular/router';
// import { EmployeeListComponent } from './employee-list/employee-list.component';  // Ensure path is correct
// import { CreateEmployeeComponent } from './create-employee/create-employee.component';


// const routes: Routes = [
//   { path: 'createemployee', component: CreateEmployeeComponent }
// ];

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet,RouterModule.forRoot(routes),CreateEmployeeComponent, EmployeeListComponent],  // Include EmployeeListComponent here
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'first-angular';
// }


// app.component.ts
import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EmployeeListComponent,
    CreateEmployeeComponent,RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
}
