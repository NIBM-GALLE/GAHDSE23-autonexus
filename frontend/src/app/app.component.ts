import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage01Component } from './landing-page01/landing-page01.component';
import { LandingPage02Component } from './landing-page02/landing-page02.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LandingPage01Component,LandingPage02Component,LandingFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
