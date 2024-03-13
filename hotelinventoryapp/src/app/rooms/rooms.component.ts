import { Component, OnInit } from '@angular/core';
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

export class RoomsComponent implements OnInit{
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

  roomList: RoomList[] = [];

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  /**
   * LIFECYCLE HOOKS
   * ngOnChanges
   * ngOnInit
   * ngAfterContentInit
   * ngAfterContentChecked
   * ngAfterViewInit
   * ngAfterViewChecked
   * ngOnDestroy
   */

  constructor(){}

  ngOnInit(): void {
    this.roomList = [{
      roomNumber: 3,
      roomType:'Deluxe',
      amenities: 'Air conditioner, bar',
      price: 500,
      photos: 'asdasd.jpg',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date(),
      rating : 8.2123,
    },
    {
      roomNumber: 9,
      roomType:'Normal',
      amenities: 'Nothing lol',
      price: 200,
      photos: 'asdasd.jpg',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date(),
      rating : 6.8321,
    },
    {
      roomNumber:1,
      roomType:'Pent House',
      amenities: 'Air conditioner, bar, hottub',
      price: 1000,
      photos: 'asdasd.jpg',
      checkinTime: new Date('11-Nov-2023'),
      checkoutTime: new Date(),
      rating : 10.0444,
    }]
  
  }
}
