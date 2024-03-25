import { Component, ContentChild, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  //This creates a 'local instance' of RoomsService, so RoomsService initializes twice
  providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {

  empName: string = 'EmployeeGil';

  //RESOLUTION MODIFIERS - Self
  //@Self decorator tells angular this service (RoomsService) will only be available
  //at this particular level, so it wont look anywhere else for the service therefore
  //it is necesary to add RoomsService to the providers array.
  // constructor(@Self() private roomService: RoomsService) {

  // }

  ngOnInit(): void {

  }


}
