import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit{
  item:any;
  ngOnInit(): void {
    // creating using new 
      // const observable = new Observable(observer =>{
      //   observer.next(1)
      //   observer.next(2)
      //   observer.next(3)
      // })
    const arr = [1,2,3,4,5]
    // creating using of
      // const observable = of(arr)

    // obserable for iterables
    const observable = from(arr)

    observable.subscribe((data: any)=>{
      console.log(data)
      this.item=data
    })
  }
}
