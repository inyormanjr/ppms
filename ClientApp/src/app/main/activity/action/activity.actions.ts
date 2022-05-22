import { createAction, props } from '@ngrx/store';
import { Activity } from 'src/app/models/activityAgg/activity';

export const loadActivitys = createAction(
  '[Activity] Load Activitys'
);

export const loadActivitysSuccess = createAction(
  '[Activity] Load Activitys Success',
  props<{ data: Activity[] }>()
);

export const loadActivitysFailure = createAction(
  '[Activity] Load Activitys Failure',
  props<{ error: any }>()
);
