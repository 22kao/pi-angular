import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Company } from './company';
import { tap, delay, take } from 'rxjs/operators';

//const apiUrl = 'http://localhost:3000/empresas';
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  private readonly apiUrl = 'http://localhost:3000/empresas';
  constructor(private http: HttpClient) { }

  getCompany() {
    return this.http.get<Company[]>(this.apiUrl)
      .pipe(
        delay(2000),
        tap(console.log));
  }

  loadByID(id){
    return this.http.get<Company>(this.apiUrl + "/" + id).pipe(take(1));
  }

  postCompany(company) {
    return this.http.post(this.apiUrl, company).pipe(take(1));

  }

  putCompany(company){
    return this.http.put(this.apiUrl + "/" + [company.id], company).pipe(take(1));
  }

  save(company){
    if (company.id) {
      return this.putCompany(company);
    } else {
    return this.postCompany(company);
    }
  }

}