import { UserProfile } from './../models/receivablesAgg/userProfile';
import { UserServicesService } from './../services/user-services.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Assignee } from '../models/activityAgg/activity';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<Assignee[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Assignee[]> {
    return this.userService.getAssignees().pipe();
  }

  constructor(private userService: UserServicesService) {}
}
