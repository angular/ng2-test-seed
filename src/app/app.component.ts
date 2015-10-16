import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `,
  styles: [`
    .router-link {padding: 5px;text-decoration: none;}
    .router-link:visited, .router-link:link {color: #444;}
    .router-link:hover {color: white; background-color: #1171a3; text-decoration: none;}
    .router-link.router-link-active {color: white; background-color: #52b9e9; text-decoration: none;}
  `],
  directives: [CORE_DIRECTIVES, HeroesComponent]
})
export class AppComponent {
  public title = 'Tour of Heroes';
}
