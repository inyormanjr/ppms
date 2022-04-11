import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './login-view/login-view.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{path: '', component: LoginViewComponent}];
@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
