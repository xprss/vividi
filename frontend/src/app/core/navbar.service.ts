import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private enabled: boolean;

  constructor(private readonly router: Router) {
    this.enabled = true;
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
}
