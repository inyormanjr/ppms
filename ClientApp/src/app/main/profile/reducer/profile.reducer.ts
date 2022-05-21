import { updateProfilesSuccess } from './action/profile.actions';
import { UserProfile } from './../../../models/receivablesAgg/userProfile';
import { User } from './../../../models/user';
import { Action, createReducer, on } from '@ngrx/store';
import { ProfileActions } from './action/profile.action.types';


export const profileFeatureKey = 'profile';

export interface ProfileState {
  updateSuccess: boolean
}

export const initialState: ProfileState = {
  updateSuccess: false,
};

export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.fetchProfilesSuccess, (state, action) => {
    return {
      ...state,
      currentUser: action.data
    }
  }),
  on(ProfileActions.updateProfilesSuccess, (state, action) => {
    return {
      ...state,
      updateSuccess: action.success
    }
  })

);
