import { AppActions } from 'src/app/reducers/app.action.types';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './models/user';
import { AppRootState } from './reducers';
import { AcountService } from './services/account/acount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private accountService: AcountService, private appStore: Store<AppRootState>) {}
  ngOnInit(): void {
    this.setCurrentUser();
  }
  setCurrentUser() {
    var u = localStorage.getItem('user');
    if (u) {
      const user: User = JSON.parse(u);
      this.appStore.dispatch(AppActions.login({ user }));
      // this.accountService.setCurrentUser(user);
    } else {
      console.log('error');
    }
  }
}
