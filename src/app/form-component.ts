import {Component, ViewChild} from 'angular2/core';
import {FORM_DIRECTIVES, NgForm, FormBuilder} from 'angular2/common';

@Component({
	selector: 'my-form',
	templateUrl: 'app/form-component.html',
  directives: [FORM_DIRECTIVES]
})
export class FormComponent {
  @ViewChild(NgForm) form: NgForm;

  nickname: string = 'Jenny';

  showConfirmation: boolean = false;

  register() {
    this.showConfirmation = true;
  }
}
