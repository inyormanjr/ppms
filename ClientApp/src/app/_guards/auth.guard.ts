import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AcountService } from '../services/account/acount.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    Observable<boolean> {
    return this.accountService.checkAuth().pipe(map((x: boolean) => {
      if (x !== true) {
        this.router.navigate(['/login']);
     }
     return true;
    }));
  }

  constructor(private accountService: AcountService, private router: Router
    ) {}
}
