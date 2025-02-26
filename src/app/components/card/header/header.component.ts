import { Component } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-header',
  imports: [RatingComponent, TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
