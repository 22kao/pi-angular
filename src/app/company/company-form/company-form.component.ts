import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
  preserveWhitespaces: true
})
export class CompanyFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private service: CompanyService) { }

  ngOnInit() {

    this.form = this.fb.group({
      name:  [null,[Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      document: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(14)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(50)]],
      address: this.fb.group({
      cep: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      street: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      city: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      state: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      number: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]]
      }),
      phones: this.fb.group({
        phone: [null],
        username:[null]
      })
    })

  }

  hasError(field: string){
    return this.form.get(field).errors;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('submit');
      this.service.postCompany(this.form.value).subscribe(
        success=> console.log('sucesso'),
        error => console.error(error),
        ()=> console.log('request completo')
      );
    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset();
    }

}
