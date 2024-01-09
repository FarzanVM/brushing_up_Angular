import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  name:string="Farzan V M";
  isDisabled:boolean=true;
  closeLabel:string="Close Label";

  onClick(){
    alert("User Clicked Successfully")
  }
  showName(name:string){
    alert(name)
  }
  fromChild(name:string){
    alert(name)
  }

}
