import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { Company } from '../company';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  preserveWhitespaces: true
})
export class CompanyListComponent implements OnInit {
   
  
  //bsModalRef: BsModalRef;
  
  //** variavel foi inclusa no html *ngIF | async para fazer apenas uma chamada no banco de dados*/
  //companies: Company[];

  //**Notação Finlandesa $ para Observable --Responsabilidade de Unsubscribe
  companies$: Observable<Company[]>;
  error$ = new Subject<boolean>();
  

  constructor(private companyService: CompanyService,
              private alertService: AlertModalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //**Commitado devido a performace da aplicação, cada vez que subscribe é necessario 
    //**o unsubscribe para aumento de perfomace por isso adotamos utilizar o Observable
   // this.companyService.getCompany()
   // .subscribe(dados => this.companies = dados);

   this.companies$ = this.companyService.getCompany()
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
  
  onEdit(id){
    this.router.navigate(['editar', id], {relativeTo: this.route});

  }
}
