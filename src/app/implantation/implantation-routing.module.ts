import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImplantationListComponent } from './implantation-list/implantation-list.component';
import { ImplantationFormComponent } from './implantation-form/implantation-form.component';
import { ImplantationResolveGuard } from './guards/implantation-resolve.guard';



const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "/implantation/list",
  //   pathMatch: "full"
  // },
   {
     path: '',
     component: ImplantationListComponent
   },
   {
     path: "novo",
     component: ImplantationFormComponent,
     resolve: { implantation: ImplantationResolveGuard}
   },
   {
     path: "editar/:id",
     component: ImplantationFormComponent,
     resolve: { implantation: ImplantationResolveGuard}
   }
 ];
 
 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class implantationRoutingModule { }