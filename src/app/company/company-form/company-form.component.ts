import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CompanyService } from "../company.service";
import { AlertModalService } from "src/app/shared/alert-modal.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Company } from '../company';

@Component({
  selector: "app-company-form",
  templateUrl: "./company-form.component.html",
  styleUrls: ["./company-form.component.scss"],
  preserveWhitespaces: true
})

export class CompanyFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: CompanyService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    //const company = this.route.snapshot.data['Company'];
    //console.log(company);

    // this.route.params
    // .pipe(
    //   map((params: any) => params['id']),
    //   switchMap(id => this.service.loadByID(id))
    // )
    // .subscribe(company => this.updateForm(company));

    const company = this.route.snapshot.data['company'];
    console.log(company)

    this.form = this.fb.group({
      id: [company.id],
      name: [company.name,[Validators.required,Validators.minLength(5),Validators.maxLength(255)]
      ],
      document: [company.document,[Validators.required, Validators.minLength(6), Validators.maxLength(14)]     ],
      email: [company.email,[Validators.required, Validators.email, Validators.maxLength(50)]],
      address: this.fb.group({
        cep: [company.address.cep,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
        street: [company.address.street,[Validators.required,Validators.minLength(10),Validators.maxLength(255)]],
        city: [company.address.city,[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],
        state: [company.address.state,[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
        number: [company.address.number,[Validators.required,Validators.minLength(1),Validators.maxLength(10)]]}),
      phones: this.fb.group({
        phone: [company.phones.phone],
        username: [company.phones.username]
      })
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      console.log("submit");

      let msgSucess = 'Criado com Suscesso!';
      let msgError = 'Erro ao criar Empresa. Tente Novamente!';

      if (this.form.value.id){
        msgSucess = 'Atualizado com Suscesso!';
        msgError = 'Erro ao atualizar Empresa. Tente Novamente!';
      }

      this.service.save(this.form.value).subscribe(
        sucess =>{this.modal.showAlertSuccess(msgSucess);
        this.location.back();
      },
        error =>{this.modal.showAlertDanger(msgError)}
      );

      // if(this.form.value.id){
      //     this.service.putCompany(this.form.value).subscribe(
      //       success => {
      //         this.modal.showAlertSuccess("Atualizado com Suscesso!");
      //         this.location.back();
      //       },
      //       error =>
      //         this.modal.showAlertDanger("Erro ao atualizar Empresa. Tente Novamente!"),
      //       () => console.log("update completo"));
      // } else{
      //   this.service.postCompany(this.form.value).subscribe(
      //     success => {
      //       this.modal.showAlertSuccess("Criado com Suscesso!");
      //       this.location.back();
      //     },
      //     error =>
      //       this.modal.showAlertDanger("Erro ao criar Empresa. Tente Novamente!"),
      //     () => console.log("request completo"));
      // }
     
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  // updateForm(company){
  //   this.form.patchValue({
  //     id: company.id,
  //     name: company.name,
  //     document: company.document,
  //     email: company.email,
  //     cep: company.address.cep,
  //     street: company.address.street,
  //     number: company.address.number,
  //     city: company.address.city,
  //     state: company.state,
  //     phone: company.phones.phone,
  //     username: company.phones.username

  //   });
  //}

}
