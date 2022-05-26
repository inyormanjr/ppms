import { UserSelectedPipe } from './../pipe/user-selected.pipe';
import { UsersResolver } from './../../resolvers/users.resolver';
import { DepartmentResolver } from './../../resolvers/department.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgPipesModule } from 'ngx-pipes';


const route: Routes = [
  { path: '', component: ActivityViewComponent },
  { path: 'create', component: ActivityCreateComponent,resolve: {departments: DepartmentResolver, users: UsersResolver}}
      ];
@NgModule({
  declarations: [
    ActivityViewComponent,
    ActivityViewActionMenuComponent,
    ActivityViewItemListComponent,
    UserSelectedPipe,
    ActivityCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgPipesModule,
    ReactiveFormsModule,
    AngularEditorModule,
    RouterModule.forChild(route),
    StoreModule.forFeature(activityFeatureKey, activityViewReducer),
    EffectsModule.forFeature([ActivityEffects]),
  ],
  providers: [],
})
export class ActivityModule {}
