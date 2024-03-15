import { AfterContentInit, Component, ContentChild, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'hinv-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements AfterContentInit {

  //AfterConentInit

  //ContentChild has no option of calling static: true;
  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  ngAfterContentInit(): void {
    console.log('Employee: ',this.employee);
    //Using ContentChild to access a component
    //The prefered way is using input and output 
    this.employee.empName = 'EmployeeMike';
  }
}
