import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuloRoutingModule } from './modulo-routing.module';
import { ModuloListComponent } from './modulo-list/modulo-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ModuloListComponent],
  imports: [
    CommonModule,
    ModuloRoutingModule,
    ReactiveFormsModule
  ]
})
export class ModuloModule { }
