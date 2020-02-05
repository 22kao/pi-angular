import { Component, OnInit } from '@angular/core';
import { ImplantationService } from '../implantation.service';
import { Implantation } from '../implantation';
import { Observable, empty } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-implantation-list',
  templateUrl: './implantation-list.component.html',
  styleUrls: ['./implantation-list.component.scss'],
  preserveWhitespaces: true
})
export class ImplantationListComponent implements OnInit {


  implements$: Observable<Implantation[]>;

  constructor(private implantationService: ImplantationService,
              private alertService: AlertModalService) { }

  ngOnInit() {

    this.onRefresh();

  }
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar implantação. Tente novamente mais tarde.');
  }

  onEdit(){

  }

  onDelete(){

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

  }

  onDeclineDelete(){
    
  }
}
