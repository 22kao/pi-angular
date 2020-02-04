import { Injectable } from '@angular/core';
import {CanActivate, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Company } from '../company';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { CompanyService } from '../company.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyResolveGuard implements Resolve<Company> {

  constructor(private service: CompanyService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Company> {
    
    if (route.params && route.params['id']){
     // console.log('Entrou no guard '+route.params['id'])
      return this.service.loadByID(route.params['id']);
    }     

    return of({
      id: null, 
      name: null,
      document: null,
      email: null,
      phones: null,
      phone: null,
      username: null,
      addess: null,
      cep: null,
      street: null,
      number: null,
      state: null,
      city: null
    });


  }

  
}
