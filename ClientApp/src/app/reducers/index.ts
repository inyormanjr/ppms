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
  isLoading: boolean,
  user?: User,
  errorMessage: string,
  loginErrorMessage: string
}

export const intialAppState: AppRootState = {
  isLoading: false,
  user: undefined,
  errorMessage: '',
  loginErrorMessage: ''
};


export const appReducer = createReducer(
  intialAppState,
  on(AppActions.loadApps, (state, action) => {
    return {
      ...state,
      isLoading: true,
    }
  }),
  on(AppActions.loadAppsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      errorMessage: action.error
      }
  }),
  on(AppActions.loadAppsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
    }
  }),
  on(AppActions.login, (state, action) => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(AppActions.loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      isLoading: false
    }
  }),
  on(AppActions.loginFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      loginErrorMessage: action.message
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
