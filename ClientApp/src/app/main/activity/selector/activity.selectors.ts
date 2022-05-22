import { ActivityViewState, activityFeatureKey } from './../reducer/activity.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectActivityFeature = createFeatureSelector<ActivityViewState>
  (activityFeatureKey);


export const selectActivityList= createSelector(selectActivityFeature, activity => activity.currentActivityList);
