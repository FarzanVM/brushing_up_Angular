import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  items:string[]=["farzan","bhadra","choppan","pikachu"];
  show:boolean=false;
  day:number=5;
  isRed:boolean=true;
  name:string="Farzan";
}
