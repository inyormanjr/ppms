import { EskeyReceivable } from './../../../../models/receivablesAgg/eskeyReceivable';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eskeys-incoming-table-card',
  templateUrl: './eskeys-incoming-table-card.component.html',
  styleUrls: ['./eskeys-incoming-table-card.component.css']
})
export class EskeysIncomingTableCardComponent implements OnInit {
  @Input() incomingEskeys: EskeyReceivable[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
