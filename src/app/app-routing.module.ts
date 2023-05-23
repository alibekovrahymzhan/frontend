import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataComponent} from "./data/data.component";
import { EmployeeListComponent } from './employee-list/employee-list.component';
//mapping component with url
const routes: Routes = [
  // {path: 'data', component: DataComponent}
  {path: '', component: EmployeeListComponent}
  // {path: '', component: DataComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
