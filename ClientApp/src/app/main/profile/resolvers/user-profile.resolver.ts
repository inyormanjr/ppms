import { UserProfile } from './../../../models/receivablesAgg/userProfile';
import { UserServicesService } from 'src/app/services/user-services.service';
import { ProfileState } from './../reducer/profile.reducer';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<any> {

  constructor(private userService: UserServicesService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.userService.getProfile().pipe(
      catchError((error) => {
        return of('No data');
      })
    );
  }
}
