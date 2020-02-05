import { Component, OnInit, ViewChild } from '@angular/core';
import { ImplantationService } from '../implantation.service';
import { Implantation } from '../implantation';
import { Observable, empty, EMPTY } from 'rxjs';
import { catchError, tap, take, switchMap } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-implantation-list',
  templateUrl: './implantation-list.component.html',
  styleUrls: ['./implantation-list.component.scss'],
  preserveWhitespaces: true
})
export class ImplantationListComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', {static: false}) deleteModal;
  
  implements$: Observable<Implantation[]>;
  implantationSeleted: Implantation;

  constructor(private implantationService: ImplantationService,
              private alertService: AlertModalService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.onRefresh();

  }
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar implantação. Tente novamente mais tarde.');
  }

  onEdit(id){
    console.log(id);
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(implantation){
      this.implantationSeleted = implantation;
      const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover essa Implantação?');

      result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result? this.implantationService.remove(implantation.id): EMPTY)
      )     
      .subscribe(
        sucess=> {this.onRefresh();
        },
          error => {
            this.alertService.showAlertDanger('Erro ao remover implantação. Tente novamente mais tarde.');
          }
        );

  }

  onRefresh(){
    this.implements$ = this.implantationService.getList()
    .pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    );
  }

  onConfirmDelete(){
    this.implantationService.remove(this.implantationSeleted.id)
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
