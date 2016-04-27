import {Component, ViewChild, EventEmitter, Output} from 'angular2/core';
import {FORM_DIRECTIVES, NgForm, FormBuilder} from 'angular2/common';


@Component({
  selector: 'simpleclick',
  template: `<button id="n1" (click)="doTheThing()">Do It</button><span id="n2">{{done}}</span>`
})
export class SimpleClick {
  done: string = 'nope';
  doTheThing() {
    console.log('DID THE THING');
    this.done = 'yup';
  }
}

@Component({
  selector: 'otherclick',
  template: `<button id="m1" (click)="provoke()">Provoke</button><span id="m2">{{status}}</span>`
})
export class OtherClick {
  @Output() attack = new EventEmitter();

  status: string = 'calm';

  provoke() {
    console.log('YOU POKED ME!!');
    this.status = 'angry';
    this.attack.emit('foo?');
  }
}

@Component({
	selector: 'my-form',
	templateUrl: 'app/form-component.html',
  directives: [FORM_DIRECTIVES, SimpleClick, OtherClick]
})
export class FormComponent {
  // @ViewChild(NgForm) form: NgForm;

  nickname: string = 'Jenny';
  retreated: string = 'Here';

  showConfirmation: boolean = false;

  // register() {
  //   this.showConfirmation = true;
  // }

  retreat() {
    console.log('Uh oh I made it mad');
    this.retreated = 'Run awaaay';
  }
}
