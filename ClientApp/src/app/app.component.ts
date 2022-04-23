import { Observable } from 'rxjs';
import { AppActions } from 'src/app/reducers/app.action.types';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './models/user';
import { AppRootState } from './reducers';
import { AcountService } from './services/account/acount.service';
import { AppSelectors } from './reducers/app.selector.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoading$: Observable<boolean>;
  constructor(private accountService: AcountService, private appStore: Store<AppRootState>) {
    this.isLoading$ = this.appStore.select(AppSelectors.selectAppIsLoaidng);
  }
  ngOnInit(): void {
    this.setCurrentUser();
  }
  setCurrentUser() {
    var u = localStorage.getItem('user');
    if (u) {
      const user: User = JSON.parse(u);
      this.appStore.dispatch(AppActions.loginSuccess({ user }));
    } else {
      console.log('error');
    }
  }
}
