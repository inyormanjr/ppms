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
    private store: Store<DashboardState>
  ) {}
}
