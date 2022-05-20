import { EskeyReceiveResolverResolver } from './resolvers/eskey-receive-resolver.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EskeysViewComponent } from './eskeys-view/eskeys-view.component';
import { EffectsModule } from '@ngrx/effects';
import { EskeyEffects } from './reducer/effects/eskey.effects';
import { eskeysReducer } from './reducer/eskeys.reducer';
import { EskeysReceivablesTableComponent } from './components/eskeys-receivables-table/eskeys-receivables-table.component';
import { EskeyCreateComponent } from './eskey-create/eskey-create.component';
import { EskeysReceiveComponent } from './eskeys-receive/eskeys-receive.component';

const router: Routes = [
  { path: '', component: EskeysViewComponent },
  { path: 'create', component: EskeyCreateComponent },
  { path: 'receive/:id', component: EskeysReceiveComponent, resolve: { eskeyReceivable: EskeyReceiveResolverResolver }}];

@NgModule({
  declarations: [
    EskeysViewComponent,
    EskeysReceivablesTableComponent,
    EskeyCreateComponent,
    EskeysReceiveComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(router),
    StoreModule.forFeature('eskeys', eskeysReducer),
    EffectsModule.forFeature([EskeyEffects])
  ]
})
export class EskeysModule { }
