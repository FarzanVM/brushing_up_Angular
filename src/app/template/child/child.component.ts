import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() data='';
  @Output() outputEvent = new EventEmitter<string>();

  sendtoParent(name:string){
    this.outputEvent.emit(name);
  }
}
