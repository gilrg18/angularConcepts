import { Component } from '@angular/core';
import { Room } from './rooms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  //CommonModule for *ngIf to work
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent {
  //INTERPOLATION
  hotelName = 'RIU Hotel';
  //PROPERTY BINDING
  numberOfRooms = 100;

  //EVENT BINDING
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
