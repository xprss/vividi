import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  public readonly refreshEsploraEvent: BehaviorSubject<void>;

  constructor() {
    this.refreshEsploraEvent = new BehaviorSubject<void>(undefined);
  }

  public refreshEsplora(): void {
    this.refreshEsploraEvent.next();
  }
}
