import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IBaseService } from './../ibase-service';
import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EskeysService extends BaseService implements IBaseService<EskeyReceivable> {

  constructor(private httpClient: HttpClient) {
    super();
    this.baseURL = this.baseURL + 'eskeys/';
  }


  Get(): Observable<EskeyReceivable[]> {
    return this.httpClient.get<EskeyReceivable[]>(this.baseURL)
      .pipe(map((response: EskeyReceivable[]) => {
        return response;
      }));
  }
  GetById(id: number): Observable<EskeyReceivable> {
    return this.httpClient.get<EskeyReceivable>(this.baseURL)
      .pipe(map((response: EskeyReceivable) => response));
  }
  Create(t: EskeyReceivable): Observable<EskeyReceivable> {
    return this.httpClient.post<EskeyReceivable>(this.baseURL, { t })
      .pipe(map((response: EskeyReceivable) => response));
  }
  Update(id: number, t: EskeyReceivable): Observable<any> {
    return this.httpClient.put<EskeyReceivable>(this.baseURL + id, { t })
      .pipe(map((response: EskeyReceivable) => response));
  }
  Delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseURL + id)
      .pipe(map((response: any) => response));
  }


}
