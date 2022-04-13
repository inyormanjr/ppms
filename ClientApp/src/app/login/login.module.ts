import { AcountService } from './../services/account/acount.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginViewComponent } from './login-view/login-view.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [{path: '', component: LoginViewComponent}];
@NgModule({
  declarations: [
    LoginViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [AcountService]
})
export class LoginModule { }
