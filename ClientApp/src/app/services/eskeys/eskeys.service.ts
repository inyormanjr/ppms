import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EskeyReceivable } from 'src/app/models/receivablesAgg/eskeyReceivable';

@Injectable({
  providedIn: 'root',
})
export class EskeysService
  extends BaseService<EskeyReceivable>
{
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.baseURL = this.baseURL + 'eskeys/';
  }

  GetEskeyReceivable(): Observable<EskeyReceivable[]> {
    return this.httpClient.get<EskeyReceivable[]>(this.baseURL + "receivable").pipe(
      map((response: EskeyReceivable[]) => {
        return response;
      })
    );
  }

  GetEskeysReceived(): Observable<EskeyReceivable[]> {
    return this.httpClient
      .get<EskeyReceivable[]>(this.baseURL + 'received')
      .pipe(
        map((response: EskeyReceivable[]) => {
          return response;
        })
      );
  }
}
