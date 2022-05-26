import { HttpClient } from '@angular/common/http';
import { BaseService } from './../base.service';

import { Injectable } from '@angular/core';
import { Department } from 'src/app/models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseService<Department> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.baseURL = this.baseURL + 'department';
  }
}
