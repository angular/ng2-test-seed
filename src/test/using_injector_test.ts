import {
  it,
  describe,
  expect,
  inject
} from 'angular2/testing';
import {
  APP_ID
} from 'angular2/angular2';


describe('default test injector', () => {
  it('should provide default pipes', inject([APP_ID], (id) => {
    expect(id).toBe('a');
  }));
});
