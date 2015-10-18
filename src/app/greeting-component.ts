import {Component, FORM_DIRECTIVES} from 'angular2/angular2';
import {UserService} from './user-service';

@Component({
  selector: 'my-greeting',
  template: `
    <input [(ng-model)]="user.pin" placeholder="1111" type=number></input>
    <button (click)="enter()">Enter</button>
    <h3>Status: {{greeting}}</h3>
  `,
  directives: [FORM_DIRECTIVES]
})
export class GreetingComponent {
  greeting: string = 'Enter PIN';

  constructor(public user: UserService) {
  }

  enter() {
    this.user.getGreeting().then((greeting) => {
      this.greeting = greeting;
    });
  }
}
