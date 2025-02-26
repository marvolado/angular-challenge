import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PictureComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() class: string = '';
}
