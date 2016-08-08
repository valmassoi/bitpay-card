import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './404/page-not-found.component';

const routes: RouterConfig = [

  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'index', redirectTo: '', pathMatch: 'full' },//^combinable?
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent },
  // { path: 'paramExample/:id', component: SOMEComponent },
];

export const appRouterProviders = [
  provideRouter(routes)

];
