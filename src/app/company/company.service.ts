import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from './company';
import { tap } from 'rxjs/operators';

const apiUrl = 'http://localhost:3000/empresas';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompany() {
    return this.http.get<Company[]>(apiUrl)
      .pipe(
        tap(console.log));
  }

}