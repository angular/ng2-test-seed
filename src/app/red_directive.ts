import {ElementRef, Directive, Renderer} from 'angular2/angular2';

@Directive({selector: '[red]'})
export class RedDec {
  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el, 'color', 'red');
  }
}
