import { Component } from '@angular/core';
import { Signup } from './signUp';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  // email:string|any="Choppan@gmail.com";In Angular we typically won’t data bind to a simple string or 
  // object on our component but a domain model we’ve defined via a class, let’s create one for our 
  // Signup form called Signup.
  model:Signup=new Signup();
  showFormValues(value:any){
    console.log("form values",value)
  }
  onSubmit(){
    console.log("FORM SUBMITTED")
  }
}
