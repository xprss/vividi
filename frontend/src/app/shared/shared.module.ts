import { NgModule } from '@angular/core';
import { BasePageComponent } from './components/base-page/base-page.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { MoreComponent } from './components/more/more.component';

@NgModule({
  declarations: [],
  imports: [BasePageComponent, PageTitleComponent, MoreComponent],
  exports: [BasePageComponent, PageTitleComponent, MoreComponent],
})
export class SharedModule {}
