import { UserProfile } from './../../../../models/receivablesAgg/userProfile';
import { User } from './../../../../models/user';
import { ProfileState } from './../profile.reducer';
import { Store } from '@ngrx/store';
import { AcountService } from './../../../../services/account/acount.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { ProfileActions } from '../action/profile.action.types';
import { noop } from 'rxjs';
import { UserServicesService } from 'src/app/services/user-services.service';



@Injectable()
export class ProfileEffects {
  fetchCurrentUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProfileActions.fetchProfile),
        tap((action) => {
          this.accountService
            .getProfile()
            .pipe(
              map((user: UserProfile) => {
                if (user) {
                  this.store.dispatch(ProfileActions.fetchProfilesSuccess({ data: user }));
                }
              })
            )
            .subscribe(noop, (error) => {
              this.store.dispatch(
                ProfileActions.ProfilesFailure({ error: error })
              );
              console.log(error);
            });
        })
      ),
    { dispatch: false }
  );

  updateCurrentUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProfileActions.updateProfile),
      tap((action) => {
        this.accountService
          .updateProfile(action.userProfile)
          .pipe(
            map((userProfile: UserProfile) =>
              this.store.dispatch(
                ProfileActions.updateProfilesSuccess({ success: true })
              )
            )
        ).subscribe(noop, (error) => {
             this.store.dispatch(
               ProfileActions.updateProfilesSuccess({ success: false })
             );
             console.log(error);
          });
    })),
    { dispatch: false }
  );

  constructor(private actions$: Actions,
    private store: Store<ProfileState>,
    private accountService: UserServicesService) { }
}
