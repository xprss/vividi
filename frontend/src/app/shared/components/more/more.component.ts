import { Component, Input } from '@angular/core';
import { Menu } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'v2d-more',
  imports: [Menu, ButtonModule],
  templateUrl: './more.component.html',
  styleUrl: './more.component.scss',
})
export class MoreComponent {
  @Input() public menuEntries: MenuItem[] | undefined;
}
