import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [AlertModalComponent],
  imports: [
    CommonModule
  ],
  exports: [AlertModalComponent],
  entryComponents: [AlertModalComponent] /*AlterModal será utilizado em tempo de execução*/
})
export class SharedModule { }
