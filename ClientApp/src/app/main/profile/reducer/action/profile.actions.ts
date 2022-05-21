import { UserProfile } from './../../../../models/receivablesAgg/userProfile';

import { createAction, props } from '@ngrx/store';

export const fetchProfile = createAction(
  '[Profile]  Fetch Profile'
);

export const updateProfile = createAction(
  '[Profile]  Update Profile',
  props<{ userProfile: UserProfile }>()
);



export const fetchProfilesSuccess = createAction(
  '[Profile]  Profiles Success',
  props<{ data: UserProfile }>()
);

export const updateProfilesSuccess = createAction(
  '[Profile]  Profile update Success',
  props<{ success: boolean }>()
);

export const ProfilesFailure = createAction(
  '[Profile]  Profiles Failure',
  props<{ error: any }>()
);
