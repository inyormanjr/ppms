import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';


const route: Routes = [{path: '', component: ProfileViewComponent}];
@NgModule({
  declarations: [
    ProfileViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ProfileModule { }
