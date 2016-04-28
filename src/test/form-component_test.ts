import {
  iit,
  it,
  xit,
  ddescribe,
  describe,
  expect,
  inject,
  async,
  TestComponentBuilder,
  beforeEach,
  beforeEachProviders,
  fakeAsync,
  ComponentFixture,
  tick
} from 'angular2/testing';
import {By} from 'angular2/platform/common_dom';
import { provide } from 'angular2/core';
import { FormComponent, Form2Component} from '../app/form-component';

ddescribe('form components', () => {
  var builder;

  beforeEach(async(inject([TestComponentBuilder], (tcb) => {
    builder = tcb;
  })));

  it('should display a form to register', async(() => {
    builder.createAsync(FormComponent).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
      // given a form
      let userForm = fixture.componentInstance.userForm;
      expect(userForm.value).toEqual({});

      setTimeout(() => {
        fixture.detectChanges();
        expect(userForm.value).toEqual({ login: null });

        let login = fixture.debugElement.query(By.css('input'));
        login.nativeElement.value = 'Cédric';
        login.nativeElement.dispatchEvent(new Event('input'));

        setTimeout(() => {
          fixture.detectChanges();
          expect(userForm.value).toEqual({ login: 'Cédric' });
        }, 100);
      });
    });
  }));

  it('should display a form 2', async(() => {
    builder.createAsync(Form2Component).then((fixture: ComponentFixture) => {
      fixture.detectChanges();
      // given a form
      let userForm = fixture.componentInstance.userForm;

      expect(userForm.value).toEqual({ login: '' });

      // when adding values in the form
      let nativeElement = fixture.nativeElement;
      nativeElement.querySelector('input').value = 'Cédric';
      nativeElement.querySelector('input').dispatchEvent(new Event('input'));

      fixture.detectChanges();

      expect(userForm.value).toEqual({ login: 'Cédric' });
    });
  }));
});
