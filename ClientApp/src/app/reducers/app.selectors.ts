import { appRootKey, AppRootState } from './index';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectAppFeature = createFeatureSelector<AppRootState>(appRootKey);



export const selectUser = createSelector(selectAppFeature, app => app.user);

export const selectAppIsLoaidng = createSelector(selectAppFeature, app => app.isLoading);
