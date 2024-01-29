import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit{
  name=new FormControl("");
  myForm:FormGroup | any;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      firstname:new FormControl('Farzan '),
      lastname:new FormControl('V M'),
      email:new FormControl('choppan@gmail.com')
    })
  }

  onSubmit(myform:FormGroup){
    console.log(myform.value);
  }

}
