import { EskeyReceivable } from './../../../../models/receivablesAgg/eskeyReceivable';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eskeys-receivables-table',
  templateUrl: './eskeys-receivables-table.component.html',
  styleUrls: ['./eskeys-receivables-table.component.css']
})
export class EskeysReceivablesTableComponent implements OnInit {
  @Input() incomingEskeys: EskeyReceivable[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }

}
