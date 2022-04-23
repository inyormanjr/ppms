
import { Router } from '@angular/router';
import { AcountService } from './../../services/account/acount.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppActions } from 'src/app/reducers/app.action.types';
import { AppRootState } from 'src/app/reducers';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private appStore: Store<AppRootState>) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}


  login() {
    console.log('login');
    let loginCred = this.loginForm.value;
    this.appStore.dispatch(AppActions.login({ username: loginCred.username, password: loginCred.password }));
  }

  clear() {
    this.loginForm.reset();
  }
}
