import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private enabled: boolean;
  public currentRoute: string = '/';

  constructor(public readonly router: Router) {
    this.enabled = true;
    this.currentRoute = this.router.url;
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
    this.router.navigate(['/newVibe']);
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

  public updateCurrentRoute(url: string) {
    this.currentRoute = url;
  }
}
