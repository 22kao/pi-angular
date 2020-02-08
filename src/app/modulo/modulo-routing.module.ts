import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloListComponent } from './modulo-list/modulo-list.component';


const routes: Routes = [
  {
    path: '',
    component: ModuloListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuloRoutingModule { }
