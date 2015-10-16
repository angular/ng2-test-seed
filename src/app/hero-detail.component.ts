import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: Hero;

  constructor(private _heroService: HeroService) {
  }
}
