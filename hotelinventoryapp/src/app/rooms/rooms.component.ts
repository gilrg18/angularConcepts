import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  //CommonModule for *ngIf to work
  //Parent Component (Smart Component: from where to get the data): RoomsComponent
  //Child Component (Dumb component: just render the data): RoomsListComponent
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css',
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
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

  //ViewChild, ViewChildren and AfterViewInit
  //With ViewChild we create a new instance of HeaderComponent inside RoomsComponent
  //With static: true (default is false) you are telling the parent component(RoomsComponent) that it
  //is safe to instance the child component(HeaderComponent) on the parents onInit.
  //Default static: false because if a child component has async data, it wont be able
  //to render on the parents component onInit which will cause errors, so if you are sure
  //that the child component isnt waiting for responses data or something from an api, you can
  //set static: true so it renders on the parents onInit

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  //It will listen to ANY changes that happen in your ENTIRE application (very costly)
  ngDoCheck(): void {
    console.log('ngDoCheck: called on changes');
  }

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
    console.log('headerComponent: ',this.headerComponent);
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

  //In developer mode ull get NG0100 error, dont worry about it, worry if its in production mode
  ngAfterViewInit(): void {
    // this.headerComponent.title = "Rooms View";
    // console.log('headerComponent: ',this.headerComponent);
  }

  //At this point, angular has completed one lifecycle check already
  ngAfterViewChecked(){
    this.headerComponent.title = "Rooms View";
    console.log('headerComponent: ',this.headerComponent);
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
