import {
  iit,
  it,
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
import { FormComponent } from '../app/form-component';

ddescribe('form components', () => {
  var fixture;

  beforeEach(async(inject([TestComponentBuilder], (tcb) => {
    tcb.createAsync(FormComponent).then((componentFixture: ComponentFixture) => {
      fixture = componentFixture;
    });
  })));

  iit('should change ngModel', async(() => {
    fixture.detectChanges();

    // var el = fixture.nativeElement.querySelector('#my-nickname');
    var el = fixture.debugElement.query(By.css('#my-nickname')).nativeElement;

    el.value = 'Ace';
    debugger;
    el.dispatchEvent(new Event('input')); // Necessary and event has to be 'input'


    // fixture.detectChanges(); // not necessary.
    // This is RESETTING back to the original nickname if we do not do
    // the first detectChanges at the start.

    console.log(fixture.componentInstance.nickname);

    setTimeout(() => {
      console.log(fixture.componentInstance.nickname);
    }, 100);
  }));

  it('should display a form', async(() => {
    fixture.detectChanges();
    console.log(fixture.componentInstance.form.value.location);

    // let nativeElement = fixture.nativeElement;
    // debugger;
    // nativeElement.querySelector('#my-address').value = 'New York';
    // debugger;
    // // nativeElement.querySelector('#my-zip').value = '10001';
    // nativeElement.querySelector('#my-address').dispatchEvent(new Event('input'));
    // // nativeElement.querySelector('button').click();

    var el = fixture.debugElement.query(By.css('#my-address')).nativeElement;
    el.value = 'New York';
    debugger;

    // fixture.detectChanges();
    debugger;

    var evt: Event = document.createEvent('Event');
    evt.initEvent('input', true, true);

    el.dispatchEvent(evt);
    debugger;

    fixture.detectChanges();
    debugger;

    console.log(fixture.componentInstance.form.value.location);

    setTimeout(() => {
      console.log(fixture.componentInstance.form.value.location);
    }, 100);
  }));
});
