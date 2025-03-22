import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { UserPostComponent } from './components/user-post/user-post.component';
import { Avatar } from 'primeng/avatar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextModule, ButtonModule, MessageModule, Avatar, FormsModule, UserPostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public posts: any[] = [
    {
      username: "Vincenzo Sagristano",
      timestamp: "8 novembre 2025",
      description: "ciao raga auguriii"
    },
    {
      username: "Noemi Mosca",
      timestamp: "8 novembre 2025",
      description: "Mi piacciono i colori!!!"
    },
    {
      username: "Luca Sagristano",
      timestamp: "8 novembre 2025",
      description: "Nn ho capit. loris mangi.a.casa"
    },
  ];
}
