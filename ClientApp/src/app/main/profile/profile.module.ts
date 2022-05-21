import { UserProfileResolver } from './resolvers/user-profile.resolver';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './reducer/effects/profile.effects';
import { profileReducer } from './reducer/profile.reducer';


const route: Routes = [{path: '', component: ProfileViewComponent, resolve: {userProfile: UserProfileResolver}}];
@NgModule({
  declarations: [ProfileViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    StoreModule.forFeature('profile', profileReducer),
    EffectsModule.forFeature([ProfileEffects]),
  ],
})
export class ProfileModule {}
