import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImplantationListComponent } from './implantation-list/implantation-list.component';
import { ImplantationFormComponent } from './implantation-form/implantation-form.component';
import { ImplantationResolveGuard } from './guards/implantation-resolve.guard';
import { ImplantationDetailComponent } from './implantation-detail/implantation-detail.component';
import { ImplantationModuloComponent } from './implantation-modulo/implantation-modulo.component';



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
   ,
   {
     path: "detail",
     component: ImplantationDetailComponent,
     //resolve: { implantation: ImplantationResolveGuard}
   },
   {
    path: "editar/:id/modulos",
    component: ImplantationModuloComponent,
    //resolve: { implantation: ImplantationResolveGuard}
  }
  ,
 ];
 
 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })
 export class implantationRoutingModule { }