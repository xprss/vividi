import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  public isVisibile: boolean;
  public isEnabled: boolean;

  constructor() {
    this.isVisibile = false;
    this.isEnabled = true;
  }

  public toggle(isVisible?: boolean): void {
    if (isVisible !== undefined) {
      this.isVisibile = isVisible;
      return;
    }
    this.isVisibile = !this.isVisibile;
  }

  public enable(): void {
    this.isEnabled = true;
  }

  public disable(): void {
    this.isEnabled = false;
  }
}
