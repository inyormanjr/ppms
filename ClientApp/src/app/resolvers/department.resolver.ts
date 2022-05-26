import { catchError } from 'rxjs/operators';
import { DepartmentService } from './../services/department/department.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentResolver implements Resolve<Department[]> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Department[]> {
    return this.departmentService.Get().pipe();
  }

  constructor(private departmentService: DepartmentService) {

  }
}


