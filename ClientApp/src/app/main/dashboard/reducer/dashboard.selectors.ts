
import { DashboardState, dashboardFeatureKey } from './dashboard.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const selectDashboardFeature = createFeatureSelector<DashboardState>(dashboardFeatureKey);

export const selectActivities = createSelector(selectDashboardFeature, x => x.activities);
export const selectEskeyReceivable = createSelector(selectDashboardFeature, x => x.eskeyReceivables);
export const selectEskeyReceived = createSelector(
  selectDashboardFeature,
  (x) => x.eskeysReceived
);
