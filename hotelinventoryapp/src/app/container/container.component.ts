import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  //providers: [RoomsService]
})
export class ContainerComponent implements AfterContentInit {

  //AfterConentInit

  //ContentChild has no option of calling static: true;
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  //RESOLUTION MODIFIERS - HOST
  //All the components loaded inside this container will use this instance of RoomsService
  constructor(){

  }

  ngAfterContentInit(): void {
    console.log('Employee: ',this.employee);
    //Using ContentChild to access a component
    //The prefered way is using input and output 
    this.employee.empName = 'EmployeeMike';
  }

  //NGAFTERCONTENTCHECK - whenever somethings need to be done after a change action has executed (rarely used)
}
