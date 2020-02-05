import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImplantationListComponent } from './implantation-list/implantation-list.component';



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
     component: ImplantationListComponent
   },
   {
     path: "editar/:id",
     component: ImplantationListComponent
   }
 ];
 
 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class implantationRoutingModule { }