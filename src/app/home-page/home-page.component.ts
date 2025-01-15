import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent,LandingPageComponent,FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
