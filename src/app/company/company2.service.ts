import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Company2Service extends CrudService<Company> {

  constructor(protected http: HttpClient) {
    super(http, 'http://localhost:3000/empresas');
  }
}
