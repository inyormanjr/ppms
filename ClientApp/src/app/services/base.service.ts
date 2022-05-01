import { IBaseService } from './ibase-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { inherits } from 'util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
   baseURL = environment.baseApiURL;
  constructor() {
  }
}
