import { Router, Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view/main-view.component';
import { StoreModule } from '@ngrx/store';
import * as fromMain from './reducers';


const routes: Routes = [{
  path: '', component: MainViewComponent, children: [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
]}];
@NgModule({
  declarations: [
    MainViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromMain.mainFeatureKey, fromMain.reducers, { metaReducers: fromMain.metaReducers })
  ]
})
export class MainModule { }