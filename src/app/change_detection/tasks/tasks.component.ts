import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class TasksComponent {
  tasks:string[]=["Make Coffee","Brush teeth","Bath","Have Breakfast"]

  constructor(){
    // setTimeout(()=>{
    //   this.tasks = ["thor"]
    // },3000)
  }
  addTasks(){
    // let newtasks = this.tasks
    // newtasks.push("New Task")
    // this.tasks.push("new Task")
    this.tasks =[...this.tasks,"New tasks"]
    console.log("Added",this.tasks)
  }
}
