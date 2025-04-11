import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VibePostComponent } from './vibe-post/vibe-post.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VibePostComponent,
    NewVibeFormComponent,
    NewVibeImageUploadComponent,
    NewVibeReviewComponent,
    NewVibeTagsComponent,
  ],
  exports: [
    VibePostComponent,
    NewVibeFormComponent,
    NewVibeImageUploadComponent,
    NewVibeReviewComponent,
    NewVibeTagsComponent,
  ],
})
export class FeaturesModule {}
