import { Injectable } from '@angular/core';
import * as po from '../../../public/po/support-center.json';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SupportService {
  protected currentKey:
    | 'support-center-explore'
    | 'support-center-create'
    | 'support-center-user'
    | 'support-center-vibe' = 'support-center-explore';

  constructor(protected readonly router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const page = event.url.split('/')[1];
        if (page === 'home') {
          this.currentKey = 'support-center-explore';
        } else if (page === 'new-vibe') {
          this.currentKey = 'support-center-create';
        } else if (page === 'me') {
          this.currentKey = 'support-center-user';
        } else if (page === 'vibe') {
          this.currentKey = 'support-center-vibe';
        }
      }
    });
  }

  public getSupportData(): { head: string; body: string[] } {
    return po[this.currentKey];
  }

  public setCurrentKey(
    key:
      | 'support-center-explore'
      | 'support-center-create'
      | 'support-center-user'
  ): void {
    this.currentKey = key;
  }
}
