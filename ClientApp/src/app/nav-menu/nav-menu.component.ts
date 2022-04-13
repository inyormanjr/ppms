import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './../models/user';
import { AcountService } from './../services/account/acount.service';
import { Component, OnInit } from '@angular/core';
import { AppRootState } from '../reducers';
import { Store } from '@ngrx/store';
import { AppSelectors } from '../reducers/app.selector.types';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  appUser$: Observable<User> | undefined;
  constructor(private appStore: Store<AppRootState>,private accountService: AcountService, private router: Router) {}
  ngOnInit(): void {
    this.appUser$ = this.appStore.select(AppSelectors.selectUser).pipe(map((user: any) => user));
  }

  logOut() {
    this.accountService.logOut();
    this.router.navigate(['/', 'login'])
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
