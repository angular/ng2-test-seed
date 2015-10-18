import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {GreetingComponent} from './greeting-component';
import {BorderComponent} from './border-component';

@Component({
  selector: 'my-app',
  template: `
    <my-fancy-border title="The PIN Machine">
      <my-greeting></my-greeting>
    </my-fancy-border>
  `,
  directives: [CORE_DIRECTIVES, GreetingComponent, BorderComponent]
})
export class AppComponent {
}
