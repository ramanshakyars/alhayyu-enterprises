import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-home-page',
  imports: [NavbarComponent,LandingPageComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
