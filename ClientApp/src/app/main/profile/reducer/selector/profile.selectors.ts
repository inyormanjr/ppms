import { ProfileState, profileFeatureKey } from './../profile.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

 const selectProfileFeature = createFeatureSelector<ProfileState>(profileFeatureKey);


export const selectUpdateSuccess = createSelector(selectProfileFeature, app => app.updateSuccess);
