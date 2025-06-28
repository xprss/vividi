import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'v2d-wip',
  standalone: true,
  imports: [SharedModule, HeaderComponent],  
  templateUrl: './wip.component.html',
  styleUrl: './wip.component.scss'
})
export class WipComponent {

}
