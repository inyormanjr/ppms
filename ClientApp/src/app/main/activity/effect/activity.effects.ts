import { Activity } from './../../../models/activityAgg/activity';
import { tap, map } from 'rxjs/operators';
import { ActivityService } from './../../../services/activity/activity.service';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ActivityActionType } from '../action/activity.action.type';
import { ActivityViewState } from '../reducer/activity.reducer';
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';



@Injectable()
export class ActivityEffects {

  fetchActivityList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ActivityActionType.loadActivitys),
        tap((action) => {
          this.activityService.Get().pipe(map((data: Activity[]) => {
          
            this.store.dispatch(ActivityActionType.loadActivitysSuccess({ data }));
          })).subscribe(noop, (error) => {})
        })
      ), {dispatch: false}
  );


  constructor(private actions$: Actions, private activityService: ActivityService, private store: Store<ActivityViewState>) {}

}
