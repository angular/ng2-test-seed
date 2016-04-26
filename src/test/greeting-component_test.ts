import {
  iit,
  it,
  ddescribe,
  describe,
  expect,
  inject,
  async,
  TestComponentBuilder,
  beforeEachProviders,
  fakeAsync,
  tick
} from 'angular2/testing';
import { provide } from 'angular2/core';
import { UserService } from '../app/user-service';
import { LoginService } from '../app/login-service';
import { GreetingComponent } from '../app/greeting-component';

class MockLoginService extends LoginService {
  login(pin: number) {
    return Promise.resolve(true);
  }
}

describe('greeting component', () => {
    beforeEachProviders(() => [
    provide(LoginService, {useClass: MockLoginService}),
    UserService
  ]);

  it('should ask for PIN', async(inject([TestComponentBuilder], (tcb) => {
    tcb.createAsync(GreetingComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;


      expect(compiled).toContainText('Enter PIN');
      expect(compiled.querySelector('h3')).toHaveText('Status: Enter PIN');
    });
  })));

  it('should change greeting', async(inject([TestComponentBuilder], (tcb) => {
    tcb.createAsync(GreetingComponent).then((fixture) => {
      fixture.detectChanges();

      fixture.debugElement.componentInstance.greeting = "Foobar";

      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3')).toHaveText('Status: Foobar');
    });
  })));

  it('should override the template', async(inject([TestComponentBuilder], (tcb) => {
    tcb.overrideTemplate(GreetingComponent, `<span>{{greeting}}<span>`)
        .createAsync(GreetingComponent).then((fixture) => {
          fixture.detectChanges();

          var compiled = fixture.debugElement.nativeElement;
          expect(compiled).toHaveText('Enter PIN');
        });
      })));

  it('should accept pin', async(inject([TestComponentBuilder], (tcb) => {
    tcb.createAsync(GreetingComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;
      compiled.querySelector('button').click();

      fixture.debugElement.componentInstance.pending.then(() => {
        fixture.detectChanges();
        expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
      });;
    });
  })));

  it('should accept pin (with fakeAsync)', fakeAsync(inject([TestComponentBuilder], (tcb) => {
    var fixture;
    tcb.createAsync(GreetingComponent).then((rootFixture) => {
      fixture = rootFixture });
    tick();

    var compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('button').click();

    tick();
    fixture.detectChanges();
    expect(compiled.querySelector('h3')).toHaveText('Status: Welcome!');
  })));
});
