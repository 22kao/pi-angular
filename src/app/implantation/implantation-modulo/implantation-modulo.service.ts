import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service';
import { ImplantationModulo } from './implantation-modulo';
import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImplantationModuloService {
 API_URL = 'http://localhost:3000/implantation/modules/:id'
  constructor(protected http: HttpClient) {}


  getList() {
    return this.http.get<ImplantationModulo[]>(this.API_URL)
      .pipe(
        delay(2000),
        tap(console.log));
  }

  loadByID(id){
    return this.http.get<ImplantationModulo>(this.API_URL + "/" + id).pipe(take(1));
  }

  postRecord(record: ImplantationModulo) {
    return this.http.post(this.API_URL, record).pipe(take(1));

  }

  putRecord(record: ImplantationModulo){
    return this.http.put(this.API_URL + "/" + [record['id']], record).pipe(take(1));
  }

  save(record: ImplantationModulo){
    if (record['id']) {
      return this.putRecord(record);
    } else {
    return this.postRecord(record);
    }
  }

  remove(id){
    return this.http.delete(this.API_URL + "/" + [id]).pipe(take(1));
  }

  
}
