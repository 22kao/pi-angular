import { Injectable } from '@angular/core';
import {CanActivate, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { Company } from '../company';
import { CompanyService } from '../company.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyResolveGuard implements Resolve<Company> {

  constructor(private service: CompanyService) {}

  company: Company;
  //cep: Company["address"];


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
    
    if (route.params && route.params['id']){
     // console.log('Entrou no guard '+route.params['id'])
      return this.service.loadByID(route.params['id']);
    }     
     // return EMPTY;
    return of({
      id: null, 
      name: null,
      document: null,
      email: null,
      phones: null,
      phone: null,
      username: null,
      address: null,
      cep: null,
      street: null,
      number: null,
      state: null,
      city: null
    })
    ;


  }

  
}
