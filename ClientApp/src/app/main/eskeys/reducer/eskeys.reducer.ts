import { EskeyReceivable } from './../../../models/receivablesAgg/eskeyReceivable';
import { Action, createReducer, on } from '@ngrx/store';
import { EskeyActions } from './actions/eskeys.action.types';

export const eskeysFeatureKey = 'eskeys';

export interface EskeysState {
  eskeyReceivables: EskeyReceivable[];
  eskeysReceived: EskeyReceivable[];
}

export const eskeysInitialState: EskeysState = {
  eskeyReceivables: [],
  eskeysReceived: [],
};

export const eskeysReducer = createReducer(
  eskeysInitialState,
  on(EskeyActions.loadEskeyReceivablesSuccess, (state, action) => {
    return {
      ...state,
      eskeyReceivables: action.data,
    };
  }),
  on(EskeyActions.loadEskeyReceivedSuccess, (state, action) => {
    return {
      ...state,
      eskeysReceived: action.data
    }
  })
);
