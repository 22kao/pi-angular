import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Observable, empty, Subject, EMPTY } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Company2Service } from '../company2.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  preserveWhitespaces: true
})
export class CompanyListComponent implements OnInit {
   
  
  //bsModalRef: BsModalRef;
  
  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static: false}) deleteModal;
  //** variavel foi inclusa no html *ngIF | async para fazer apenas uma chamada no banco de dados*/
  //companies: Company[];

  //**Notação Finlandesa $ para Observable --Responsabilidade de Unsubscribe
  companies$: Observable<Company[]>;
  error$ = new Subject<boolean>();
  companySeleted: Company;
  

  constructor(private companyService: Company2Service,
              private modalService: BsModalService,
              private alertService: AlertModalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //**Commitado devido a performace da aplicação, cada vez que subscribe é necessario 
    //**o unsubscribe para aumento de perfomace por isso adotamos utilizar o Observable
   // this.companyService.getCompany()
   // .subscribe(dados => this.companies = dados);

   this.companies$ = this.companyService.getList()
   .pipe(
     catchError(error => {
       console.error(error);
       //this.error$.next(true);
       this.handleError();
       return empty();
     })
   );

  }

  handleError(){
      this.alertService.showAlertDanger('Erro ao carregar empresas. Tente novamente mais tarde.');
    //this.bsModalRef = this.modalService.show(AlertModalComponent);
    //this.bsModalRef.content.type = 'danger';
    //this.bsModalRef.content.message = 'Erro ao carregar empresas. Tente novamente mais tarde.';

  }
  
  onRefresh(){
    this.companies$ = this.companyService.getList().pipe(

      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    )
  }

  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});

  }

  onDelete(company){
    this.companySeleted = company;
    //this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'})
    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover essa Empresa?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.companyService.remove(company.id) : EMPTY)
    )
    .subscribe(
      sucess=> {this.onRefresh();
      },
        error => {
          this.alertService.showAlertDanger('Erro ao remover empresas. Tente novamente mais tarde.');
        }
      );
  }

  onConfirmDelete(){
      this.companyService.remove(this.companySeleted.id)
      .subscribe(
        sucess=> {this.onRefresh();
        this.deleteModalRef.hide();
      },
        error => this.alertService.showAlertDanger('Erro ao remover empresas. Tente novamente mais tarde.')
      );
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }
}
