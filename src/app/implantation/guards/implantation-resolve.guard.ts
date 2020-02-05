import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Implantation } from '../implantation';
import { ImplantationService } from '../implantation.service';

@Injectable({
  providedIn: 'root'
})
export class ImplantationResolveGuard implements Resolve<Implantation> {
    
  constructor(private service: ImplantationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Implantation> {

    if (route.params && route.params['id']){
       console.log('Entrou no guard '+route.params['id'])
       return this.service.loadByID(route.params['id']);
     }     
     else {
      console.log('Entrou no guard '+route.params['id'])
     
     return of({
      
      id: null,
      description: null,
      dtExpectedInitial: null,
      dtExpected: null,
      dtRealized: null,
      dtInitial: null,
      status: null
     })
    }

     
 
  }

  
}
