import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UnavailableComponent } from './unavailable/unavailable.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeComponent, UnavailableComponent],
  exports: [HomeComponent],
})
export class LayoutsModule {}
