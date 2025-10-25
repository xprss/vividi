import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  public readonly refreshEsploraEvent: Subject<void>;

  constructor() {
    this.refreshEsploraEvent = new Subject<void>();
  }

  public refreshEsplora(): void {
    this.refreshEsploraEvent.next();
  }
}
