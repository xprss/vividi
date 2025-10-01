import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VibePostComponent } from './vibe-post/vibe-post.component';
import { NewVibeFormComponent } from './new-vibe-form/new-vibe-form.component';
import { provideHttpClient } from '@angular/common/http';
import { EndOfFeedComponent } from './end-of-feed/end-of-feed.component';
import { QuizModule } from './quiz/quiz.module';

@NgModule({
  providers: [provideHttpClient()],
  declarations: [],
  imports: [CommonModule, VibePostComponent, NewVibeFormComponent, EndOfFeedComponent, QuizModule],
  exports: [VibePostComponent, NewVibeFormComponent, EndOfFeedComponent, QuizModule],
})
export class FeaturesModule {}
