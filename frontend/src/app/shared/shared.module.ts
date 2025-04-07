import { NgModule } from '@angular/core';
import { BasePageComponent } from './components/base-page/base-page.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

@NgModule({
  declarations: [],
  imports: [BasePageComponent, PageTitleComponent],
  exports: [BasePageComponent, PageTitleComponent]
})
export class SharedModule {}
