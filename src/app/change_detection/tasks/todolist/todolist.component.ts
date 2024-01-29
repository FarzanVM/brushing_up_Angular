import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class TodolistComponent implements OnInit {
 todos:any;
  @Input() set tasks(value:any){
    this.todos=value;
    console.log(this.todos,"todos")
    // this.cdr.detectChanges();
  }
  constructor(private cdr:ChangeDetectorRef){}
  ngOnInit(): void {
    console.log("child appears")
  }

}
