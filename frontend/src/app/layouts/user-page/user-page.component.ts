import { Component } from '@angular/core';
import { BasePageComponent } from "../../shared/components/base-page/base-page.component";
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'v2d-user-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss'
})
export class UserPageComponent {

}
