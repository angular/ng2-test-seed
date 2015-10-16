import {
  DebugElement, By
} from 'angular2/angular2';
import {
  iit,
  it,
  ddescribe,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {
  HeroDetailComponent
} from '../app/hero-detail.component';
import {Hero} from '../app/hero';
import {HeroService} from '../app/hero.service';

describe('hero detail component', () => {
  beforeEachProviders(() => [HeroService])

  it('should be blank if no hero is selected', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(HeroDetailComponent).then((fixture) => {
      fixture.detectChanges();

      expect(fixture.debugElement.nativeElement.textContent).toContain('No selected hero');
    });
  }));

  it('should list a hero', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(HeroDetailComponent).then((fixture) => {
      var hero = new Hero();
      hero.id = 1;
      hero.name = 'LaserLass';
      fixture.debugElement.componentInstance.hero = hero;

      fixture.detectChanges();

      expect(fixture.debugElement.nativeElement.textContent).toContain('LaserLass details!');
    });
  }));
});
