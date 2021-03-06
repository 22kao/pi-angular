import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { HttpClient } from '@angular/common/http';
import { Implantation } from './implantation';

@Injectable({
  providedIn: 'root'
})
export class ImplantationService extends CrudService<Implantation>{

  constructor(protected http: HttpClient) {
    super(http, 'http://localhost:8080/implantation');
  }

  //'http://localhost:8080/implantation/modules/1'
}