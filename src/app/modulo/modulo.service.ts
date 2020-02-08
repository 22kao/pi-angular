import { Injectable } from '@angular/core';
import { CrudService } from '../shared/crud-service';
import { Modulo } from './modulo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuloService extends CrudService<Modulo>{

  constructor(http: HttpClient) {
    super(http, 'http://localhost:3000/module');
  }
}
