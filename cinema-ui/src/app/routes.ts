import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AboutUsComponent} from './about-us/about-us.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'o-nas', component: AboutUsComponent},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},

];
