import {AppComponent} from '../app/app_component';
import {
  it, xit, iit, describe, ddescribe, xdescribe, expect,
  inject, injectAsync, beforeEachProviders,
  TestComponentBuilder, RootTestComponent
} from 'angular2/testing';
import {bind, DebugElement} from 'angular2/angular2';
import {XHR} from 'angular2/src/core/compiler/xhr';
import {XHRImpl} from 'angular2/src/core/compiler/xhr_impl';

describe('Todo App', () => {
  beforeEachProviders(() => {
    return [bind(XHR).toClass(XHRImpl)];
  });

  it('should initialize', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(AppComponent).then((fixture) => {
      fixture.detectChanges();
      expect(true).toEqual(false);
    });
  }));
});
