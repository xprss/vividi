import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterOutlet,
  Router,
  NavigationEnd,
} from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LayoutsModule,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  public ngOnInit(): void {
    // Scroll to the top of the page on navigation end
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
}
