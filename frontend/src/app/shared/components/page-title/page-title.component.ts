import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'v2d-page-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss',
})
export class PageTitleComponent {
  @Input() public title: string = "";
  @Input() public centered: boolean = false;
}
