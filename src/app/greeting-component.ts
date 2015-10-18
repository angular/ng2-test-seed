import {Component, OnInit} from 'angular2/angular2';
import {UserService} from './user-service';

@Component({
  selector: 'my-greeting',
  template: `
    <h3>Login status: {{greeting}}</h3>
  `
})
export class GreetingComponent implements OnInit{
  greeting: string;
  constructor(public _user: UserService) {
  }

  onInit() {
    this._user.getGreeting().then((greeting) => {
      this.greeting = greeting;
    })
  }
}
