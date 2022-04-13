import { UserLogin } from './../models/userLogin';
import { createAction, props } from '@ngrx/store';
import { User } from '../models/user';

export const loadApps = createAction(
  '[App] Load Apps'
);

export const loadAppsSuccess = createAction(
  '[App] Load Apps Success',
  props<{ data: any }>()
);

export const loadAppsFailure = createAction(
  '[App] Load Apps Failure',
  props<{ error: any }>()
);

export const login = createAction('[Login Page] User Login', props<{ user: User }>());

export const logout = createAction('[Navbar Component] User LogOut');
