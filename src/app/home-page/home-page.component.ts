import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { FooterComponent } from '../footer/footer.component';
import { ConatctUsComponent } from '../conatct-us/conatct-us.component';

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent,LandingPageComponent,FooterComponent,ConatctUsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
