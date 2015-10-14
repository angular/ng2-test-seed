import {Store, Todo, TodoFactory} from '../app/data_service';
import {it, xit, iit, describe, ddescribe, xdescribe, expect, inject, beforeEachProviders} from 'angular2/testing';
import {bind} from 'angular2/angular2';

describe('store', () => {
  it('should add items', () => {
    var factory = new TodoFactory();
    var store = new Store();

    store.add(factory.create('one', false));
    store.add(factory.create('two', true));

    expect(store.list.length).toEqual(2);
  });

  beforeEachProviders(() => [
    bind(TodoFactory).toValue(new TodoFactory()),
    bind(Store).toValue(new Store())
  ]);

  it('should use the injector', inject([TodoFactory, Store], (factory, store) => {
    store.add(factory.create('one', false));
    expect(store.list.length).toEqual(1);
  }));
});
