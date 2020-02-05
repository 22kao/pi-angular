import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from '@angular/router';
import { ImplantationService } from '../implantation.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-implantation-form',
  templateUrl: './implantation-form.component.html',
  styleUrls: ['./implantation-form.component.scss'],
  preserveWhitespaces: true
})
export class ImplantationFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
              private service: ImplantationService,
              private modal: AlertModalService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {

    const implantation = this.route.snapshot.data['implantation'];
    console.log(implantation);

    this.form = this.fb.group({
      id: [implantation.id],
      description: [implantation.description
                            ,[Validators.required
                              ,Validators.minLength(5)
                              ,Validators.maxLength(255)]],
      dtExpectedInitial: [implantation.dtExpectedInitial
                            ,[Validators.required
                              ,Validators.minLength(5)
                              ,Validators.maxLength(255)]],
      dtExpected: [implantation.dtExpected 
                            ,[Validators.required
                              ,Validators.minLength(5)
                              ,Validators.maxLength(255)]],
      dtRealized: [implantation.dtRealized
                            ,[Validators.required
                              ,Validators.minLength(5)
                              ,Validators.maxLength(255)]],
      dtInitial: [implantation.dtInitial
                            ,[Validators.required
                              ,Validators.minLength(5)
                              ,Validators.maxLength(255)]],
      status: [implantation.status
                              ,[Validators.required
                                ,Validators.minLength(5)
                                ,Validators.maxLength(255)]]

    });

  }

  onSubmit(){
    this.submitted = true;
    if (this.form.valid) {
      console.log("submit");

      let msgSucess = 'Criado com Suscesso!';
      let msgError = 'Erro ao criar Implantação. Tente Novamente!';

      if (this.form.value.id){
        msgSucess = 'Atualizado com Suscesso!';
        msgError = 'Erro ao atualizar Implantação. Tente Novamente!';
      }

      this.service.save(this.form.value).subscribe(
        sucess =>{this.modal.showAlertSuccess(msgSucess);
        this.location.back();
      },
        error =>{this.modal.showAlertDanger(msgError)}
      );
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }


 
}
