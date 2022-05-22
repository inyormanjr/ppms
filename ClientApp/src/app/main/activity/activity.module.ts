import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityViewComponent } from './activity-view/activity-view.component';
import { ActivityViewActionMenuComponent } from './components/activity-view-action-menu/activity-view-action-menu.component';
import { ActivityViewItemListComponent } from './components/activity-view-item-list/activity-view-item-list.component';
import { activityFeatureKey, activityViewReducer } from './reducer/activity.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ActivityEffects } from './effect/activity.effects';
import { ActivityCreateComponent } from './activity-create/activity-create.component';


const route: Routes = [
  { path: '', component: ActivityViewComponent },
  { path: 'create', component: ActivityCreateComponent }
      ];
@NgModule({
  declarations: [
    ActivityViewComponent,
    ActivityViewActionMenuComponent,
    ActivityViewItemListComponent,
    ActivityCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    StoreModule.forFeature(activityFeatureKey, activityViewReducer),
    EffectsModule.forFeature([ActivityEffects]),
  ],
})
export class ActivityModule {}
