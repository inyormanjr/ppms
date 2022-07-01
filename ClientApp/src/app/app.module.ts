import { AuthGuard } from './_guards/auth.guard';
import { AuthInterceptor } from './_interceptor/auth.interceptor';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { appReducer, appRootKey } from './reducers/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './reducers/app.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

export function tokenGetter() {
  const token = localStorage.getItem('token');
  return token;
}
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['https://localhost:7283/api/'],
        disallowedRoutes: ['https://localhost:7283/'],
      },
    }),
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((x) => x.LoginModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./main/main.module').then((x) => x.MainModule),
        canActivate: [AuthGuard]
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]),

    StoreModule.forRoot({}),
    StoreModule.forFeature(appRootKey, appReducer),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        })
      : [],
    EffectsModule.forRoot(),
    EffectsModule.forFeature([AppEffects]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
