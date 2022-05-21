import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EskeyReceivable } from 'src/app/models/receivablesAgg/eskeyReceivable';
import { EskeysState } from '../reducer/eskeys.reducer';
import { Store } from '@ngrx/store';
import { EskeySelectors } from '../reducer/selectors/eskeys.selector.types';
import { EskeyActions } from '../reducer/actions/eskeys.action.types';

@Component({
  selector: 'app-eskeys-view',
  templateUrl: './eskeys-view.component.html',
  styleUrls: ['./eskeys-view.component.css'],
})
export class EskeysViewComponent implements OnInit {
  incomingEskeys$: Observable<EskeyReceivable[]>;
  receivedEskeys$: Observable<EskeyReceivable[]>;
  constructor(private store: Store<EskeysState>) {
    this.store.dispatch(EskeyActions.loadEskeyReceivables());
    this.store.dispatch(EskeyActions.loadEskeyReceived());
    this.incomingEskeys$ = store.select(EskeySelectors.selectEskeyReceivables);
    this.receivedEskeys$ = store.select(EskeySelectors.selectEskeyReceived);
  }

  ngOnInit(): void {}
}
