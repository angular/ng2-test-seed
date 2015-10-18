import {bootstrap} from 'angular2/angular2';
import {HeroService} from './hero.service';
import {UserService} from './user-service';
import {AppComponent} from './app.component';
import {LoginService} from './login-service';


bootstrap(AppComponent, [HeroService, LoginService, UserService]);
