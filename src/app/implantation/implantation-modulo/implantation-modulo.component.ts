import { Component, OnInit, ViewChild } from '@angular/core';
import { ImplantationModuloService } from './implantation-modulo.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ImplantationModulo } from './implantation-modulo';
import { Observable, empty, EMPTY, combineLatest } from 'rxjs';
import { catchError, take, switchMap, delay, tap } from 'rxjs/operators';
import { BsModalRef } from 'ngx-bootstrap/modal/ngx-bootstrap-modal';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/usuario/usuario';
import { Modulo } from 'src/app/modulo/modulo';

@Component({
  selector: 'app-implantation-modulo',
  templateUrl: './implantation-modulo.component.html',
  styleUrls: ['./implantation-modulo.component.scss'],
  preserveWhitespaces: true
})
export class ImplantationModuloComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static: false}) deleteModal;

  //implantationModulo: ImplantationModulo[]=[];

  implantationModulo$: Observable<ImplantationModulo[]>;
  implantationSeleted: ImplantationModulo;
  implantation: ImplantationModulo[];
  usuario$: Observable<Usuario[]>;
  modulo$: Observable<Modulo[]>;
  teste: any;

  constructor(protected http: HttpClient,
    private implantationModuloService: ImplantationModuloService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){

    this.implantationModulo$ = this.getList()
    .pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );

    this.usuario$ = this.getUser()
    .pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );

    this.modulo$ = this.getModulo()
    .pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );

    console.log('Testando Usuario');
    console.log(this.usuario$);
    console.log(this.implantationModulo$);
    console.log(this.modulo$);
  
  }

  getList() {
    console.log('GetList');
    return this.http.get<ImplantationModulo[]>('http://localhost:8080/implantation/modules/'+ this.route.snapshot.params['id'])
      .pipe(
        delay(2000),
        tap(console.log));

        
  }

  getUser(){
    console.log('GetUser');  
    return this.http.get<Usuario>('http://localhost:8080/users/{id}?id='+ 1)
      .pipe(
        delay(2000),
        tap(console.log));
  }

  getModulo(){
    console.log('GetModulo');
    return this.http.get<Modulo>('http://localhost:8080/module/'+ 1)
      .pipe(
        delay(2000),
        tap(console.log));
  }
  
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar Modulos dessa Implantação. Tente novamente mais tarde.');
  }

  onEdit(id){
    console.log(id);
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(implantationModule){
      this.implantationSeleted = implantationModule;
      const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover essa Implantação?');

      result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result? this.implantationModuloService.remove(implantationModule.id): EMPTY)
      )     
      .subscribe(
        sucess=> {this.onRefresh();
        },
          error => {
            this.alertService.showAlertDanger('Erro ao remover implantação. Tente novamente mais tarde.');
          }
        );

  }
  onConfirmDelete(){
    this.implantationModuloService.remove(this.implantationSeleted.id)
    .subscribe(
      sucess=> {this.onRefresh();
        this.deleteModalRef.hide();
      },
        error => this.alertService.showAlertDanger('Erro ao remover implantação. Tente novamente mais tarde.')
      );
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();    
  }


}
