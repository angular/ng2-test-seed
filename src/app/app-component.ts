import {Component} from 'angular2/core';
import {GreetingComponent} from './greeting-component';
import {BorderComponent} from './border-component';
import {FormComponent} from './form-component';

@Component({
  selector: 'my-app',
  template: `
    <my-fancy-border title="The PIN Machine">
      <my-greeting></my-greeting>
    </my-fancy-border>
    <my-form></my-form>
  `,
  directives: [GreetingComponent, BorderComponent, FormComponent]
})
export class AppComponent {
}
