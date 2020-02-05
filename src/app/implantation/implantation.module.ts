import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplantationListComponent } from './implantation-list/implantation-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { implantationRoutingModule } from './implantation-routing.module';



@NgModule({
  declarations: [ImplantationListComponent],
  imports: [
    CommonModule,
    implantationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ImplantationModule { }
