import { NgModule } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';


const routes: Routes = [
 // {
 //   path: "",
 //   redirectTo: "/company/list",
 //   pathMatch: "full"
 // },
  {
    path: '',
    component: CompanyListComponent
  },
  {
    path: "novo",
    component: CompanyFormComponent
  },
  {
    path: "editar/:id",
    component: CompanyFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
