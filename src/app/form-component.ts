import {Component, ViewChild, EventEmitter, Output} from 'angular2/core';
import {FORM_DIRECTIVES, NgForm, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: `my-form`,
  template: `
  <form (ngSubmit)="register()">
    <input id="login" ngControl="login">
  </form>

  `,
  directives: [FORM_DIRECTIVES]
})
export class FormComponent {
  login: Control;
  @ViewChild(NgForm) userForm: ControlGroup;
}

@Component({
  selector: `my-form2`,
  template: `
  <form (ngSubmit)="register()" [ngFormModel]="userForm">
    <input id="login" ngControl="login">
  </form>

  `,
  directives: [FORM_DIRECTIVES]
})
export class Form2Component {
  login: Control;
  userForm: ControlGroup;

  constructor(fb: FormBuilder) {
    this.login = fb.control('');
    this.userForm = fb.group({
      login: this.login,
    });
  }
}
