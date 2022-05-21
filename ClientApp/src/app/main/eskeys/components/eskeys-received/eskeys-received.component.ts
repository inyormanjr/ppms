import { Component, Input, OnInit } from '@angular/core';
import { EskeyReceivable } from 'src/app/models/receivablesAgg/eskeyReceivable';

@Component({
  selector: 'app-eskeys-received',
  templateUrl: './eskeys-received.component.html',
  styleUrls: ['./eskeys-received.component.css'],
})
export class EskeysReceivedComponent implements OnInit {
  @Input() receivedEskeys: EskeyReceivable[] = [];
  constructor() {}

  ngOnInit(): void {}
}
