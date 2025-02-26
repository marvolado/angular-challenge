import { Component, Input, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input() type: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
