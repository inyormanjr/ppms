import { Observable } from 'rxjs';
import { EskeyReceivable } from './../../../models/receivablesAgg/eskeyReceivable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { DashboardState } from '../reducer/dashboard.reducer';
import { DashboardActions } from '../reducer/dashboard.actionType';
import { DashboardSelector } from '../reducer/dashboardSelectorTypes';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css'],
})
export class DashboardViewComponent implements OnInit {
  incomingEskey$: Observable<EskeyReceivable[]>;
  receivedEskeys$: Observable<EskeyReceivable[]>;
  constructor(private store: Store<DashboardState>) {
    this.store.dispatch(DashboardActions.fetchEskeyReceivable());
    this.store.dispatch(DashboardActions.fetchEskeyReceived());

    this.incomingEskey$ = this.store.select(
      DashboardSelector.selectEskeyReceivable
    );

    this.receivedEskeys$ = this.store.select(DashboardSelector.selectEskeyReceived);
  }

  ngOnInit(): void {}
}
