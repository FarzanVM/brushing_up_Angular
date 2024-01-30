import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.scss']
})
export class HelloworldComponent implements OnInit,OnChanges {
  
  name:string="";

  ngOnInit(): void {
    this.name="Farzan V M"
  }

  changeName(){
    this.name = "Bhadra Vinod P"
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes",changes)
  }


}
