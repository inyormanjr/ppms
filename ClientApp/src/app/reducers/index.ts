import { User } from './../models/user';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AppActions } from './app.action.types';
export const appRootKey = 'AppRootKey';

export interface AppRootState {
  user?: User
}

export const intialAppState: AppRootState = {
  user: undefined
};


export const appReducer = createReducer(
  intialAppState,
  on(AppActions.login, (state, action) => {
    return {
      ...state,
      user: action.user
    }
  }),
  on(AppActions.logout, (state, action) => {
    return {
      ...state,
      user: undefined
    }
  })
);
export const metaReducers: MetaReducer<AppRootState>[] = !environment.production ? [] : [];
