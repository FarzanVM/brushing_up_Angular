import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newchild',
  templateUrl: './newchild.component.html',
  styleUrls: ['./newchild.component.scss']
})
export class NewchildComponent implements OnInit,OnDestroy ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
 
   //avoid  using onchanges and docheck in a same component,beacause some changes led to new changes and it become a infinite loop
    @Input() name: any;
    @ContentChild('projectedContent',{static:true}) projectContent:any;
    @ViewChild('childContent',{static:true}) childContent:any;

  ngOnInit(): void {
    console.log("Child Component Initialized")
    console.log("Oninit",this.projectContent)
    console.log("oninit childContent",this.childContent)
  }

  ngOnDestroy(): void {
    console.log("Child component destroyed")
    console.log("onDestroy",this.projectContent)
    console.log("ondestroy childContent",this.childContent)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    console.log("Child component data changed")
    console.log("onChanges",this.projectContent)
    console.log("onchanges childContent",this.childContent)
  }
  
  ngDoCheck(): void {
    console.log("Child ngDocheck is called")
    console.log("Docheck",this.projectContent)
    console.log("docheck childContent",this.childContent)
  }
  ngAfterContentInit(): void {
    console.log("child ngaftercontent init called")
    console.log("ngaftercontentInit",this.projectContent)
    console.log("after content init childContent",this.childContent)
  }
  ngAfterContentChecked(): void {
    console.log("after content checked")
    console.log("after content checked childContent",this.childContent)
  }

  ngAfterViewInit(): void {
    console.log("After View Init")
    console.log("after view init childContent",this.childContent)
  }
  ngAfterViewChecked(): void {
    console.log("After View Checked");
    console.log("after view checked childContent",this.childContent)
  }
 
}
