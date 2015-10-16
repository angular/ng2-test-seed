import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES, OnInit} from 'angular2/angular2';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  constructor(private _heroService: HeroService) { }

  getHeroes() {
    this.selectedHero = undefined;
    this.heroes = [];

    this._heroService.getHeroes()
      .then((heroes: Hero[]) => this.heroes = heroes);

    return this.heroes;
  }

  getSelectedClass(hero: Hero) {
    return { 'selected': hero === this.selectedHero };
  }

  onInit() {
    this.heroes = this.getHeroes();
  }

  onSelect(hero: Hero) {
    this._heroService.selectedHeroId = hero.id;
    this.selectedHero = hero;
  }
}
