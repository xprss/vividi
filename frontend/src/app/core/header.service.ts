import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private enabled: boolean;
  private isAdmin: boolean;

  constructor() {
    this.enabled = true;
    this.isAdmin = false;
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

  public setAdmin(isAdmin?: boolean) {
    if (isAdmin === undefined) {
      this.isAdmin = !this.isAdmin;
      return;
    }
    this.isAdmin = isAdmin;
  }
}
