import { AppActions } from 'src/app/reducers/app.action.types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ReplaySubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AppRootState } from 'src/app/reducers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AcountService {
  baseURL = environment.baseApiURL + 'account/';
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(
    private httpClient: HttpClient,
    private appStore: Store<AppRootState>
  ) {}

  login(username: string, password: string): Observable<User> {
    return this.httpClient
      .post<User>(this.baseURL + 'login', { username, password })
      .pipe(
        map((response: User) => {
          const user = response;
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })
      );
  }

  logOut() {
    localStorage.removeItem('user');
    this.appStore.dispatch(AppActions.logout());
  }

  register() {}
}