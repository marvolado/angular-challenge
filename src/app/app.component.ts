import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { PictureComponent } from "./components/picture/picture.component";
import { TitleComponent } from './components/title/title.component';
import { InfoComponent } from './components/info/info.component';
import { HeaderComponent } from "./components/card/header/header.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { FooterComponent } from "./components/card/footer/footer.component";
import { PriceComponent } from './components/footer/price/price.component';
import { UserlistComponent } from "./components/userlist/userlist.component";
import { UserComponent } from './components/userlist/user/user.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, CardComponent, PictureComponent, CommonModule, TitleComponent, InfoComponent, HeaderComponent, AvatarComponent, FooterComponent, PriceComponent, UserlistComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Input() type: string = '';
}
