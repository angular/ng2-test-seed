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
import { provide } from 'angular2/angular2';
import { UserService } from '../app/user-service';
import { LoginService } from '../app/login-service';
import { GreetingComponent } from '../app/greeting-component';

class MockLoginService extends LoginService {
  login(pin: number) {
    return Promise.resolve(true);
  }
}

ddescribe('greeting component', () => {
    beforeEachProviders(() => [
    provide(LoginService, {useClass: MockLoginService}),
    UserService
  ]);

  it('should ask for PIN', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(GreetingComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;

      expect(compiled.textContent).toContain('Enter PIN');
      expect(compiled.querySelector('h3').textContent).toEqual('Status: Enter PIN');
    });
  }));

  it('should change greeting', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(GreetingComponent).then((fixture) => {
      fixture.detectChanges();

      fixture.debugElement.componentInstance.greeting = "Foobar";

      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3').textContent).toEqual('Status: Foobar');
    });
  }));
});
