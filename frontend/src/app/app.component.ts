import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IftaLabelModule } from 'primeng/iftalabel';
import { LayoutsModule } from './layouts/layouts.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LayoutsModule,
    CommonModule,
    IftaLabelModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    IftaLabelModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
