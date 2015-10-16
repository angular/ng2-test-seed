import {
  iit,
  it,
  ddescribe,
  describe,
  expect
} from 'angular2/testing';
import {
  HeroService
} from '../app/hero.service';

describe('hero service', () => {
  it('should return a hero', (done) => {
    var service = new HeroService();
    service.getHero(20).then((hero) => {
      expect(hero.name).toEqual('Tornado');
    }).then(done, done.fail);
  });
});
