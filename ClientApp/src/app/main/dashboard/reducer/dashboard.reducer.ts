import { Activity } from 'src/app/models/activityAgg/activity';
import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { EskeyReceivable } from 'src/app/models/receivablesAgg/eskeyReceivable';
import { DashboardActions } from './dashboard.actionType';


export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  activities: Activity[],
  eskeyReceivables: EskeyReceivable[],
  eskeysReceived: EskeyReceivable[]

}

export const initialDashboardState: DashboardState = {
  activities: [],
  eskeyReceivables: [],
  eskeysReceived: [],
};

export const dashboardReducer = createReducer(
  initialDashboardState,
  on(DashboardActions.fetchActivitiesSuccess, (state, action) => {
    return {
      ...state,
      activities: action.data,
    };
  }),
  on(DashboardActions.populateEskeyReceivable, (state, action) => {
    return {
      ...state,
      eskeyReceivables: action.data,
    };
  }),
  on(DashboardActions.populateEskeyReceived, (state, action) => {
    return {
      ...state,
      eskeysReceived: action.data,
    };
  })
);
