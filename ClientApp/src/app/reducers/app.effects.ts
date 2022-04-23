import { Router } from '@angular/router';
import { AppActions } from 'src/app/reducers/app.action.types';
import { AppRootState } from 'src/app/reducers';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AcountService } from '../services/account/acount.service';
import { Store } from '@ngrx/store';
import { tap, map } from 'rxjs/operators';
import { User } from '../models/user';
import { noop } from 'rxjs';



@Injectable()
export class AppEffects {

  loginResult$ = createEffect(() =>
    this.actions$.pipe(ofType(AppActions.login),
      tap((action) => {
        this.accountService.login(action.username, action.password).pipe(map((user: User) => {
          if (user) {
            this.appStore.dispatch(AppActions.loginSuccess({ user }));
            this.router.navigate(['/', 'home']);
          }
        })).subscribe(noop, (error) => {
          this.appStore.dispatch(AppActions.loginFailure({ message: error }));
          console.log(error);
        });
      }
      )
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions,
    private accountService: AcountService,
    private appStore: Store<AppRootState>,
    private router: Router) { }
}
