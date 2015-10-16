import {bootstrap} from 'angular2/angular2';
import {HeroService} from './hero.service';
// import {UserService} from './user.service';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [HeroService]);
