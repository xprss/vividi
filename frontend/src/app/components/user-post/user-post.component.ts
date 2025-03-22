import { Component, Input } from '@angular/core';
import { Avatar } from "primeng/avatar"
import { Chip } from "primeng/chip"

@Component({
  selector: 'v2d-user-post',
  standalone: true,
  imports: [Avatar, Chip],
  templateUrl: './user-post.component.html',
  styleUrl: './user-post.component.scss'
})
export class UserPostComponent {
  @Input() public username!: string;
  @Input() public timestamp!: string;
  @Input() public description!: string;

  constructor() {}
}
