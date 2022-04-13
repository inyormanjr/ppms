import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';

export const mainFeatureKey = 'main';

export interface MainState {

}

export const reducers: ActionReducerMap<MainState> = {

};


export const metaReducers: MetaReducer<MainState>[] = !environment.production ? [] : [];
