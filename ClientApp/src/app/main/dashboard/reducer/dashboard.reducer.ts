import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { EskeyReceivable } from 'src/app/models/receivablesAgg/eskeyReceivable';
import { DashboardActions } from './dashboard.actionType';


export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  anouncements: [],
  eskeyReceivables: EskeyReceivable[]

}

export const initialDashboardState: DashboardState = {
  anouncements: [],
  eskeyReceivables: []
};

export const dashboardReducer = createReducer(initialDashboardState,
  on(DashboardActions.populateEskeyReceivable, (state, action) => {
    return {
      ...state,
      eskeyReceivables: action.data
    }
})
);