import { Component } from '@angular/core';
import { DialogService } from 'src/app/core/dialog.service';
import { ServerService } from 'src/app/core/server.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuestionsCounterSpinnerComponent } from "src/app/features/quiz/questions-counter-spinner/questions-counter-spinner.component";
import { FeaturesModule } from 'src/app/features/features.module';

@Component({
  selector: 'v2d-wip',
  standalone: true,
  imports: [SharedModule, FeaturesModule],
  templateUrl: './wip.component.html',
  styleUrl: './wip.component.scss',
})
export class WipComponent {
  constructor(
    private readonly dialogService: DialogService,
    protected readonly serverService: ServerService
  ) {}
}
