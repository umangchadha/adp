import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmGridComponent } from './film-grid/film-grid.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent  },
  { path: 'films', component: FilmGridComponent },

  // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);