import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UnavailableComponent } from './unavailable/unavailable.component';
import { SignOnComponent } from './sign-on/sign-on.component';
import { SingleVibePageComponent } from './single-vibe-page/single-vibe-page.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeComponent, UnavailableComponent, SignOnComponent, SingleVibePageComponent],
  exports: [HomeComponent],
})
export class LayoutsModule {}
