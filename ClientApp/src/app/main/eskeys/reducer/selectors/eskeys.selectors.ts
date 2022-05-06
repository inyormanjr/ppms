import { eskeysFeatureKey, EskeysState } from './../eskeys.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const eskeyFeature = createFeatureSelector<EskeysState>(eskeysFeatureKey);

export const selectEskeyReceivables = createSelector(eskeyFeature, app => app.eskeyReceivables);

