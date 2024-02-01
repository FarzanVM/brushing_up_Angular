import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloworldComponent implements OnInit,OnChanges,DoCheck{
  

  name:string="";
  isChild:boolean=true;

  ngOnInit(): void {
    this.name="Farzan V M"
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent ngOnchanges called")
  }
  ngDoCheck(): void {
    console.log("parent doCheck called")
  }
  changeName(){
    this.name = "Bhadra Vinod P"
  }
  showChild(){
    this.isChild=!this.isChild;
  }


}
