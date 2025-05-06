import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VibePostComponent } from './vibe-post/vibe-post.component';
import { NewVibeFormComponent } from './new-vibe-form/new-vibe-form.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  providers: [provideHttpClient()],
  declarations: [],
  imports: [CommonModule, VibePostComponent, NewVibeFormComponent],
  exports: [VibePostComponent, NewVibeFormComponent],
})
export class FeaturesModule {}
