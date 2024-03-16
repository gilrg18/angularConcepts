import { Component } from '@angular/core';
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
export class EmployeeComponent{

  empName: string = 'EmployeeGil';

  constructor(private roomService: RoomsService) {

  }


}
