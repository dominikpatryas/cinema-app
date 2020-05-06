import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
    { path: '', component: MoviesComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
        { path: 'register', component: RegisterComponent }

        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},

];
