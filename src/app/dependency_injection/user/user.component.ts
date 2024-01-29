import { Component } from '@angular/core';
import { DependencyService } from '../service';
import { MockServiceService } from 'src/app/services/mock-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[DependencyService]//available in component level a new instance of this dependency is created for every instance of this component and other components and directives used in the template.
})
export class UserComponent {

  di_data:string|undefined;
  user_name:string|undefined;

  constructor(private data:DependencyService,private mockservice:MockServiceService){
    this.di_data=data.data;
    this.user_name=mockservice.name;
  }

}
