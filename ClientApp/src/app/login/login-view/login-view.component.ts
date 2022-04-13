
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

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private accountService: AcountService, private router: Router) {
    this.loginForm = fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}


  login() {
    let loginCred = this.loginForm.value;
    this.accountService.login(loginCred.username, loginCred.password).subscribe(response => {

      this.router.navigate(['/','home']);

    }, error => {
      console.log(error);
    });
  }

  clear() {
    this.loginForm.reset();
  }
}
