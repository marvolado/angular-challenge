import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
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

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ButtonComponent, 
    CardComponent, 
    PictureComponent, 
    TitleComponent, 
    InfoComponent, 
    HeaderComponent, 
    AvatarComponent, 
    FooterComponent, 
    PriceComponent, 
    UserlistComponent
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      console.log("Datos cargados:", this.data);
    });
  }
}
