import {ElementRef, Component, Directive, Injectable} from 'angular2/angular2';

@Directive({selector: '[red]'})
class RedDec {
  constructor(el: ElementRef, renderer: Renderer) {
    renderer.setElementStyle(el, 'color', 'red');
  }
}
