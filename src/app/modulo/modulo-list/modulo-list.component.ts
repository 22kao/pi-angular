import { Component, OnInit } from '@angular/core';
import { ModuloService } from '../modulo.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Observable, empty } from 'rxjs';
import { Modulo } from '../modulo';
import { catchError } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modulo-list',
  templateUrl: './modulo-list.component.html',
  styleUrls: ['./modulo-list.component.scss'],
  preserveWhitespaces: true
})
export class ModuloListComponent implements OnInit {
  form: FormGroup;
  submitted = false;  
  constructor(private moduloService: ModuloService,
              private alertService: AlertModalService,
              private fb: FormBuilder,
              private route: ActivatedRoute
              ) { }

  modulo$: Observable<Modulo[]>;
  modulo2$: Observable<Modulo>;
  moduloSelecionado: Modulo;


  ngOnInit() {
    this.form = this.fb.group({
      id: [null],
      description: [null,[Validators.required,Validators.minLength(5),Validators.maxLength(255)]
      ]
    });
    this.onRefresh();
    console.log('entrou');
  }

  onRefresh(){
    this.modulo$ = this.moduloService.getList()
    .pipe(
      catchError(error =>{
        this.handleError();
        return empty();
      })
    )
  }
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar modulos. Tente novamente mais tarde.');
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onEdit(id){

    console.log(id);
  }

}