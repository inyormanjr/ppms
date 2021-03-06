import { Component, Input, OnInit } from '@angular/core';
import { EskeyReceivable } from 'src/app/models/receivablesAgg/eskeyReceivable';

@Component({
  selector: 'app-eskeys-received-table-card',
  templateUrl: './eskeys-received-table-card.component.html',
  styleUrls: ['./eskeys-received-table-card.component.css'],
})
export class EskeysReceivedTableCardComponent implements OnInit {
  @Input() receivedEskeys: EskeyReceivable[] = [];
  constructor() {}

  ngOnInit(): void {}
}
