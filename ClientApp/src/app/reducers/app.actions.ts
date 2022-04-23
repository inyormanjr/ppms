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

export const login = createAction('[Login Page] User Login', props<{ username: string, password: string }>());

export const loginSuccess = createAction('[Login Page] User Login Successful', props<{ user: User }>());
export const loginFailure = createAction('[Login Page] Login Failure', props<{message: any}>());

export const logout = createAction('[Navbar Component] User LogOut');
