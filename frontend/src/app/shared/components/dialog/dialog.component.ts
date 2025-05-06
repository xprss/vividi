import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from '../../../core/dialog.service';
import { ButtonModule } from 'primeng/button';
import { NavbarService } from '../../../core/navbar.service';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'v2d-dialog',
  imports: [DialogModule, CommonModule, ButtonModule, ProgressSpinner],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
})
export class DialogComponent {
  constructor(
    protected readonly dialogService: DialogService,
    protected readonly navbarService: NavbarService
  ) {}
}
