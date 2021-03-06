import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplantationListComponent } from './implantation-list/implantation-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { implantationRoutingModule } from './implantation-routing.module';
import { ImplantationFormComponent } from './implantation-form/implantation-form.component';
import { ImplantationDetailComponent } from './implantation-detail/implantation-detail.component';
import { ImplantationModuloComponent } from './implantation-modulo/implantation-modulo.component';



@NgModule({
  declarations: [ImplantationListComponent, ImplantationFormComponent, ImplantationDetailComponent, ImplantationModuloComponent],
  imports: [
    CommonModule,
    implantationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ImplantationModule { }
