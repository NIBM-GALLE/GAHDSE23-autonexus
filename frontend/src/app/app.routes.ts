import { Routes } from '@angular/router';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { RouteerrorPageComponent } from './routeerror-page/routeerror-page.component';
import { GetstartPageComponent } from './getstart-page/getstart-page.component';
import { CustomerSigninComponent } from './customer-signin/customer-signin.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    { path: '', component: LandingHomeComponent },
    { path: 'cusprofile', component: CustomerProfileComponent },
    { path: 'getstart', component: GetstartPageComponent },
    { path: 'cussignin', component: CustomerSigninComponent },
    { path: 'cussignup', component: CustomerSignupComponent },
    { path: 'adminpanel', component: AdminDashboardComponent },
    { path: '**', component: RouteerrorPageComponent }

];
