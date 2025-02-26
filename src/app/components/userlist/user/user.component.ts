import { Component, Input } from '@angular/core';
import { AvatarComponent } from '../../avatar/avatar.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-user',
  imports: [AvatarComponent, ButtonComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() label: string = '';
  @Input() type: 'primary' | 'secondary' | 'tertiary' | 'action' = 'primary';
}
