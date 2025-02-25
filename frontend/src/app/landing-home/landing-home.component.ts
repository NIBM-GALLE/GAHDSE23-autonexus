import { Component } from '@angular/core';
import { LandingPage01Component } from '../landing-page01/landing-page01.component';
import { LandingPage02Component } from '../landing-page02/landing-page02.component';
import { LandingFooterComponent } from '../landing-footer/landing-footer.component';
import { NavbarLandingComponent } from '../landing-navbar/landing-navbar.component';
import { ContactPageComponent } from '../contact-page/contact-page.component';

@Component({
  selector: 'app-landing-home',
  imports: [LandingPage01Component,LandingPage02Component,LandingFooterComponent,NavbarLandingComponent,ContactPageComponent],
  templateUrl: './landing-home.component.html',
  styleUrl: './landing-home.component.css'
})
export class LandingHomeComponent {

}
