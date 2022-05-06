import { EskeysIncomingTableCardComponent } from './../dashboard/components/eskeys-incoming-table-card/eskeys-incoming-table-card.component';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EskeysViewComponent } from './eskeys-view/eskeys-view.component';
import { EffectsModule } from '@ngrx/effects';
import { EskeyEffects } from './reducer/effects/eskey.effects';
import { eskeysReducer } from './reducer/eskeys.reducer';
import { EskeysReceivablesTableComponent } from './components/eskeys-receivables-table/eskeys-receivables-table.component';

const router: Routes = [{path: '', component: EskeysViewComponent}];

@NgModule({
  declarations: [
    EskeysViewComponent,
    EskeysReceivablesTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    StoreModule.forFeature('eskeys', eskeysReducer),
    EffectsModule.forFeature([EskeyEffects])
  ]
})
export class EskeysModule { }
