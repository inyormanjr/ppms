import { EskeyReceivable } from './../../../../models/receivablesAgg/eskeyReceivable';
import { tap, map } from 'rxjs/operators';
import { fetchEskeyReceivable } from './../../../dashboard/reducer/dashboard.actions';
import { EskeysState } from './../eskeys.reducer';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EskeysService } from 'src/app/services/eskeys/eskeys.service';
import { Store } from '@ngrx/store';
import { EskeyActions } from '../actions/eskeys.action.types';
import { noop } from 'rxjs';



@Injectable()
export class EskeyEffects {

  fetchEskeyReceivable$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(EskeyActions.loadEskeyReceivables),
        tap((action) => {
          this.eskeyService.Get().pipe(map((data: EskeyReceivable[]) => {
            this.store.dispatch(EskeyActions.loadEskeyReceivablesSuccess({ data }));
          })).subscribe(noop, (error) => { console.log(error) });
        })
      ),
    { dispatch: false }
  );


  constructor(private actions$: Actions, private eskeyService: EskeysService, private store: Store<EskeysState>) {}
}
