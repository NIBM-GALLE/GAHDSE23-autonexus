import { Routes } from '@angular/router';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { RouteerrorPageComponent } from './routeerror-page/routeerror-page.component';

export const routes: Routes = [
    { path: '', component: LandingHomeComponent },
    { path: 'cusprofile', component: CustomerProfileComponent },
    { path: '**', component: RouteerrorPageComponent }

];
