import { Activity } from 'src/app/models/activityAgg/activity';
import { EskeyReceivable } from './../../../models/receivablesAgg/eskeyReceivable';
import { createAction, props } from '@ngrx/store';


export const fetchEskeyReceivable = createAction('[Dashboard] Fetch Incoming Eskeys from API');

export const loadActivitys = createAction('[Dashboard] Load Activitys');

export const loadActivitysSuccess = createAction(
  '[Dashboard] Load Activitys Success',
  props<{ data: Activity[] }>()
);

export const fetchEskeyReceived = createAction(
  '[Dashboard] Fetch Received Eskeys from API'
);

export const populateEskeyReceivable = createAction('[Dashboard] Populate Incoming Eskeys table', props<{ data: EskeyReceivable[] }>());

export const populateEskeyReceived = createAction(
  '[Dashboard] Populate Received Eskeys table',
  props<{ data: EskeyReceivable[] }>()
);

export const Dashboards = createAction(
  '[Dashboard] Y Dashboards'
);

export const DashboardsSuccess = createAction(
  '[Dashboard] Y Dashboards Success',
  props<{ data: any }>()
);

export const DashboardsFailure = createAction(
  '[Dashboard] Y Dashboards Failure',
  props<{ error: any }>()
);
