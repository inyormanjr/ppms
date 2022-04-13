import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { EskeysReceivedTableCardComponent } from './components/eskeys-received-table-card/eskeys-received-table-card.component';
import { EskeysIncomingTableCardComponent } from './components/eskeys-incoming-table-card/eskeys-incoming-table-card.component';


const routes: Routes = [{path: '', component: DashboardViewComponent}];
@NgModule({
  declarations: [
    DashboardViewComponent,
    EskeysReceivedTableCardComponent,
    EskeysIncomingTableCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
