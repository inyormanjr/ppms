import { UserProfile } from './../models/receivablesAgg/userProfile';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Assignee } from '../models/activityAgg/activity';

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  baseURL = environment.baseApiURL + 'user/';
  constructor(private httpClient: HttpClient) { }


  getAssignees(): Observable<Assignee[]> {
     return this.httpClient.get<Assignee[]>(this.baseURL + 'assignees').pipe(
       map((response: Assignee[]) => {
         return response;
       })
     );
  }

  getProfile(): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(this.baseURL + 'profile').pipe(
      map((response: UserProfile) => {
        return response;
      })
    );
  }

  updateProfile(user: any): Observable<UserProfile> {
    return this.httpClient.put<UserProfile>(this.baseURL, user).pipe(
      map((response: UserProfile) => {
        return response;
      })
    );
  }
}
