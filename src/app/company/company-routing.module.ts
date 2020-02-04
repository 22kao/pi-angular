import { NgModule } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { Routes, RouterModule } from '@angular/router';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyResolveGuard } from './guards/company-resolve.guard';


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
    component: CompanyFormComponent,
    resolve: { company: CompanyResolveGuard}
  },
  {
    path: "editar/:id",
    component: CompanyFormComponent,
    resolve: { company: CompanyResolveGuard}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
