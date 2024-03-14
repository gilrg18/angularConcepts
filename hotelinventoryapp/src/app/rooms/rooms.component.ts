import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  //CommonModule for *ngIf to work
  //Parent Component (Smart Component: from where to get the data): RoomsComponent
  //Child Component (Dumb component: just render the data): RoomsListComponent
  imports: [CommonModule, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit {
  //INTERPOLATION
  hotelName = 'copelinho';
  //PROPERTY BINDING
  numberOfRooms = 100;

  //EVENT BINDING
  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomsList: RoomList[] = [];

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List!';
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

  constructor() {}

  ngOnInit(): void {
    this.roomsList = [
      {
        roomNumber: 3,
        roomType: 'Deluxe',
        amenities: 'Air conditioner, bar',
        price: 500,
        photos: 'asdasd.jpg',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date(),
        rating: 8.2123,
      },
      {
        roomNumber: 9,
        roomType: 'Normal',
        amenities: 'Nothing lol',
        price: 200,
        photos: 'asdasd.jpg',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date(),
        rating: 6.8321,
      },
      {
        roomNumber: 1,
        roomType: 'Pent House',
        amenities: 'Air conditioner, bar, hottub',
        price: 1000,
        photos: 'asdasd.jpg',
        checkinTime: new Date('11-Nov-2023'),
        checkoutTime: new Date(),
        rating: 10.0444,
      },
    ];
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Solo',
      amenities: 'Air conditioner, bar, hottub',
      price: 499,
      photos: 'siu.jpg',
      checkinTime: new Date('30-Nov-2023'),
      checkoutTime: new Date(),
      rating: 9.115,
    };
    //The concept of IMMUTABILITY says we should ALWAYS return a NEW instance
    //Instead of modifying the roomList directly we have tu return a new object everytime
    //we modify this instance. Very important when using STATE management
    //this.roomsList.push(room); //we should NOT do this
    this.roomsList = [...this.roomsList, room];
  }
}
