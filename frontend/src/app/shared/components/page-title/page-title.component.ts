import { Component, Input } from '@angular/core';

@Component({
  selector: 'v2d-page-title',
  standalone: true,
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
})
export class PageTitleComponent {
  @Input() public title: string = "";
}
