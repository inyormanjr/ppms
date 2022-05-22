import { Activity } from 'src/app/models/activityAgg/activity';
import { ActivityService } from './../../../services/activity/activity.service';
import { EskeyReceivable } from './../../../models/receivablesAgg/eskeyReceivable';
import { Store } from '@ngrx/store';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardActions } from './dashboard.actionType';
import { EskeysService } from 'src/app/services/eskeys/eskeys.service';
import { DashboardState } from './dashboard.reducer';
import { noop } from 'rxjs';



@Injectable()
export class DashboardEffects {

  fetchActivities$ = createEffect(
    () => this.actions$.pipe(
      ofType(DashboardActions.fetchActivities),
      tap((action) => {
        this.activityService.Get()
          .pipe(map((data: Activity[]) => {
             this.store.dispatch(
               DashboardActions.fetchActivitiesSuccess({ data })
             );
        })).subscribe(noop, (error) => console.log(error))
      })
    ), {dispatch: false}
  );

  fetchEskeyReceivable$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DashboardActions.fetchEskeyReceivable),
        tap((action) => {
          this.eskeyService
            .GetEskeyReceivable()
            .pipe(
              map((data: EskeyReceivable[]) => {
                this.store.dispatch(
                  DashboardActions.populateEskeyReceivable({ data })
                );
              })
            )
            .subscribe(noop, (error) => {
              console.log(error);
            });
        })
      ),
    { dispatch: false }
  );

  fetchEskeyReceived$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(DashboardActions.fetchEskeyReceivable),
        tap((action) => {
          this.eskeyService
            .GetEskeysReceived()
            .pipe(
              map((data: EskeyReceivable[]) => {
                this.store.dispatch(
                  DashboardActions.populateEskeyReceived({ data })
                );
              })
            )
            .subscribe(noop, (error) => {
              console.log(error);
            });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private eskeyService: EskeysService,
    private activityService: ActivityService,
    private store: Store<DashboardState>
  ) {}
}
