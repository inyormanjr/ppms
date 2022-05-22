
import { Activity } from './../../../models/activityAgg/activity';
import { Action, createReducer, on } from '@ngrx/store';
import { ActivityActionType } from '../action/activity.action.type';


export const activityFeatureKey = 'activity';

export interface ActivityViewState {
  currentActivityList: Activity[];
}

export const initialActivityViewState: ActivityViewState = {
  currentActivityList: []
};

export const activityViewReducer = createReducer(initialActivityViewState,
  on(ActivityActionType.loadActivitysSuccess, (state, action) => {
    return {
      ...state,
      currentActivityList: action.data
    }
}));
