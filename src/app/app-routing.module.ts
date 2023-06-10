import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataComponent} from "./data/data.component";
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
//mapping component with url
const routes: Routes = [
  // {path: 'data', component: DataComponent}
  {path: 'employees', component: EmployeeListComponent},
  {path: 'create-employee',component: CreateEmployeeComponent},
  {path: '',redirectTo: 'employees', pathMatch: 'full'}
  // {path: '', component: DataComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
