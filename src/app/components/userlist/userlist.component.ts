import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-userlist',
  imports: [CommonModule, UserComponent],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
  @Input() users: any[] = [];
}
