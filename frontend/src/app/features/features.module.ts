import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VibePostComponent } from './vibe-post/vibe-post.component';
import { NewVibeFormComponent } from './new-vibe-form/new-vibe-form.component';
import { NewVibeImageUploadComponent } from './new-vibe-image-upload/new-vibe-image-upload.component';
import { NewVibeReviewComponent } from './new-vibe-review/new-vibe-review.component';
import { NewVibeTagsComponent } from './new-vibe-tags/new-vibe-tags.component';

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
