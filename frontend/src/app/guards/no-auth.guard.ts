import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private readonly authService: AuthService
  ) {}

  public canActivate(): Observable<boolean> {
    return this.authService.$loggedIn.asObservable().pipe(
      map((isLoggedIn) => {
        if (!isLoggedIn) {
          return true;
        }
        // Store the attempted URL for redirecting
        const attemptedUrl = this.router.url;
        localStorage.setItem('attemptedUrl', attemptedUrl);

        // Redirect to the login page if not logged in
        this.router.navigate(['/']);
        return false;
      })
    );
  }
}
