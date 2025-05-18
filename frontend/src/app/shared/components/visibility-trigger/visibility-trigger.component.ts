import { Component, Input } from '@angular/core';

@Component({
  selector: 'v2d-visibility-trigger',
  imports: [],
  templateUrl: './visibility-trigger.component.html',
  styleUrl: './visibility-trigger.component.scss',
})
export class VisibilityTriggerComponent {
  @Input() public isShowingFullContent: boolean = false;
  @Input() public onShowingCroppedContentLabel: string = 'Mostra di più';
  @Input() public onShowingFullContentLabel: string = 'Mostra meno';
  @Input() public onClick: () => void = () => {};

  public toggleVisibility(): void {
    this.isShowingFullContent = !this.isShowingFullContent;
    this.onClick();
  }
}
