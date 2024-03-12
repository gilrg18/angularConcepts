import { Component } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  //INTERPOLATION
  hotelName = 'RIU Hotel';
  //PROPERTY BINDING
  numberOfRooms = 100;

  //EVENT BINDING
  hideRooms = false;
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
