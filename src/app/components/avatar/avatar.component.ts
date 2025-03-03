import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  @Input() src: string = '';
  @Input() name: string = '';
  @Input() alt: string = '';
  @Input() role: string = '';
}
