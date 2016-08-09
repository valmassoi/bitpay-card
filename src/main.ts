import { bootstrap }    from '@angular/platform-browser-dynamic'
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated'
import { HTTP_PROVIDERS } from '@angular/http'

import { AppComponent } from './app.component'
import { appRouterProviders }   from './app.routes';

import { UserService } from './_services/auth/user.service';
import { LoggedInGuard } from './_services/auth/logged-in.guard';

bootstrap(AppComponent, [
  appRouterProviders,
  // ROUTER_PROVIDERS,
  UserService,
  LoggedInGuard,
  HTTP_PROVIDERS,
]);
