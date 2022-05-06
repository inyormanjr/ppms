import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AcountService } from '../services/account/acount.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private accountService: AcountService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const idToken = this.accountService.getToken();
    if (idToken) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + idToken)
      })
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
