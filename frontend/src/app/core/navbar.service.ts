import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private enabled: boolean;
  public currentRoute: string = '/';

  constructor(public readonly router: Router) {
    this.enabled = true;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentRoute(event.url);
      }
    });
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public enable(): void {
    this.enabled = true;
  }

  public disable(): void {
    this.enabled = false;
  }

  public setEnabled(next: boolean): void {
    this.enabled = next;
  }

  public navigateToHomePage(): void {
    this.router.navigate(['/home']);
  }

  public navigateToNewVibePage(): void {
    this.router.navigate(['/new-vibe']);
  }

  public navigateToMyPersonalPage(): void {
    this.router.navigate(['/me']);
  }

  public navigateToSignInPage() {
    this.router.navigate(['/signin']);
  }

  public navigateToSignOnPage() {
    this.router.navigate(['/signon']);
  }

  public navigateToResetPasswordPage() {
    this.router.navigate(['/forgot-password']);
  }

  public navigateToVibe(_id: any) {
    this.router.navigate(['/vibe', _id]);
  }

  public updateCurrentRoute(url: string) {
    this.currentRoute = url;
  }
}
