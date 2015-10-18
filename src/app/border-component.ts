import {Component} from 'angular2/angular2';

@Component({
  selector: 'my-fancy-border',
  template: `
    <div class="outer">
    <span>........... {{title}} .............</span>
    <div class="inner"><ng-content></ng-content></div>
    <span>........... {{title}} .............</span>
    </div>
  `,
  styles: [`
    div {border: 5px solid #EDF3F3; text-align: center}
    span {font-size: 10px;display: inline-block}
    .inner {padding: 5px; margin: 5px}
    .outer {width: 400px}
  `],
  directives: [BorderComponent],
  inputs: ['title: title']
})
export class BorderComponent {
  title: string;
}
