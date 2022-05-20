import { EskeyReceivable } from 'src/app/models/receivablesAgg/eskeyReceivable';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EskeysService } from 'src/app/services/eskeys/eskeys.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EskeyReceiveResolverResolver implements Resolve<any> {
  constructor(private eskeyService: EskeysService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    var id = route.params.id;
    return this.eskeyService.GetById(id).pipe(
      catchError((error) => {
        return of('No data');
      })
    );
  }
}
