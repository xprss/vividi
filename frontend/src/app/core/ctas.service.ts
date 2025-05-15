import { Injectable } from '@angular/core';
import { CTAButton } from '../../lib/cta-button.type';

@Injectable({
  providedIn: 'root'
})
export class CtasService {
  constructor() { }

  public ctas: CTAButton[] = [];
  public isVisible: boolean = false;

  public showCtas(ctas: CTAButton[]): void {
    this.ctas = ctas;
    this.isVisible = true;
  }
  
  public hideCtas(): void {
    this.ctas = [];
    this.isVisible = false;
  }
}
