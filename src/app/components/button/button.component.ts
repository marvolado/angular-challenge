import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Click';
  @Input() type: 'primary' | 'secondary' | 'tertiary' | 'action' = 'primary';
  @Input() size: 'sm' | 'xl' = 'sm';
  @Input() disabled: boolean = false;
}
