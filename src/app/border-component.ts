import {Component} from 'angular2/angular2';

@Component({
  selector: 'my-fancy-border',
  templateUrl: 'app/border-component.html',
  styleUrls: ['app/border-component.css'],
  directives: [BorderComponent],
  inputs: ['title: title']
})
export class BorderComponent {
  title: string;
}
