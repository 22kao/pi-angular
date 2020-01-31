import { NgModule } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/company/list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: CompanyListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
