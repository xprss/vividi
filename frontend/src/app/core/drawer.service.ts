import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  public isVisibile: boolean;

  constructor() {
    this.isVisibile = false;
  }

  public toggle(isVisible?: boolean): void {
    if (isVisible !== undefined) {
      this.isVisibile = isVisible;
      return;
    }
    this.isVisibile = !this.isVisibile;
  }
}
