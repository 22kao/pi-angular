import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Company } from './company';
import { tap, delay } from 'rxjs/operators';

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
        delay(2000),
        tap(console.log));
  }

}