import {
  iit,
  it,
  ddescribe,
  describe,
  expect,
  injectAsync,
  TestComponentBuilder
} from 'angular2/testing';
import {
  HeroDetailComponent
} from '../app/hero-detail.component';

describe('hero service', () => {
  it('should return a hero', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(HeroDetailComponent).then((fixture) => {

    });
  }));
});
