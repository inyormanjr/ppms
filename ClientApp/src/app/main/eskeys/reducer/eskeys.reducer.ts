import { EskeyReceivable } from './../../../models/receivablesAgg/eskeyReceivable';
import { Action, createReducer, on } from '@ngrx/store';
import { EskeyActions } from './actions/eskeys.action.types';

export const eskeysFeatureKey = 'eskeys';

export interface EskeysState {
  eskeyReceivables: EskeyReceivable[];
}

export const eskeysInitialState: EskeysState = {
  eskeyReceivables: [],
};

export const eskeysReducer = createReducer(
  eskeysInitialState,
  on(EskeyActions.loadEskeyReceivablesSuccess, (state, action) => {
    return {
      ...state,
      eskeyReceivables: action.data,
    };
  })
);
