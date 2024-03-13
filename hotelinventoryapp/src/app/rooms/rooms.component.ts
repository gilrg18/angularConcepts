import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
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
    availableRooms: 0,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [{
    roomNumber: 3,
    roomType:'Deluxe',
    amenities: 'Air conditioner, Bar',
    price: 500,
    photos: 'asdasd.jpg',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date()
  },
  {
    roomNumber: 9,
    roomType:'Normal',
    amenities: 'Nothing lol',
    price: 200,
    photos: 'asdasd.jpg',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date()
  },
  {
    roomNumber:1,
    roomType:'Pent House',
    amenities: 'Air conditioner, Bar, HotTub',
    price: 1000,
    photos: 'asdasd.jpg',
    checkinTime: new Date('11-Nov-2023'),
    checkoutTime: new Date()
  }]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
