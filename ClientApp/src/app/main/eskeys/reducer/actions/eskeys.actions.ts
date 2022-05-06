import { EskeyReceivable } from './../../../../models/receivablesAgg/eskeyReceivable';
import { createAction, props } from '@ngrx/store';

export const loadEskeyReceivables = createAction(
  '[Eskeys] Load Eskeyss'
);

export const loadEskeyReceivablesSuccess = createAction(
  '[Eskeys] Load Eskeyss Success',
  props<{ data: EskeyReceivable[] }>()
);

export const loadEskeyReceivablesFailure = createAction(
  '[Eskeys] Load Eskeyss Failure',
  props<{ error: any }>()
);
