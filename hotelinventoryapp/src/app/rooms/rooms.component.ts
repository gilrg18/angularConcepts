import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subscription } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

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
  hideRooms = true;

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  roomsList: RoomList[] = [];

  //Creating an Observable by using RxJS, not http
  stream = new Observable((observer) => {
    //Everytime u call next() on your observer it will be emitting new data,
    //whoever is subscribed to this stream will get this data.
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    //This is where my stream completes/is done
    observer.complete();
  });

  //ViewChild, ViewChildren and AfterViewInit
  //With ViewChild we create a new instance of HeaderComponent inside RoomsComponent
  //With static: true (default is false) you are telling the parent component(RoomsComponent) that it
  //is safe to instance the child component(HeaderComponent) on the parents onInit.
  //Default static: false because if a child component has async data, it wont be able
  //to render on the parents component onInit which will cause errors, so if you are sure
  //that the child component isnt waiting for responses data or something from an api, you can
  //set static: true so it renders on the parents onInit

  //ViewChild will only access the FIRST instance of headerComponent
  //If you want to access all instances use ViewChildren
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

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

  //Dependency Injection - you should NOT create an instance directly
  //roomService = new RoomService(); NOT LIKE THIS
  //You should not access your services directly from a template(html), considered antipattern
  //Use private to limit this particular service to the typescript file


  //Async Pipe to handle subscriptions/unsubscriptions to avoid performance issues
  subscription !: Subscription

  rooms$ = this.roomService.getRooms$;

  //RESOLUTION MODIFIERS - SkipSelf - skips the check from the entire
  //dependency resolution tree for this particular component.
  //Using this decorator causes Angular to look for dependencies in the parent component or beyond.
  //Angular already uses a filter to figure out where the service instances are
  //available which is pretty fast so it might be not necessary to use skipself
  constructor(@SkipSelf() private roomService: RoomsService) {}

  totalBytes = 0;

  ngOnInit(): void {
    console.log('headerComponent: ', this.headerComponent);
    //In real world we will be retrieving this data from a service that has an api call
    //For now its just hardcoded data in the rooms service
    //this.roomsList = this.roomService.getRooms();
    //Angular uses a library called RXJS internally to work with streams of data
    //and is also used inside your http service
    //As a developer you should SUBSCRIBE to the stream to get the data
    //If i wanna get the data from roomsService.getRooms() i need to subscribe to that stream
    //We call the stream getRooms$ and know we are making the rooms call in Network tab only once and not twice
    //We will use this variable (this.subscription) to hold this subscription for us
    
    // this.subscription = this.roomService.getRooms$.subscribe((rooms) => {
    //   this.roomsList = rooms;
    // });

    //If a value changes or is pushed in a database, the observer that is subscribed to the stream (Observable),
    //will receive that change or new value using the next() method
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log(console.log('Stream completed')),
      error: (err) => console.log(err),
    });
    this.stream.subscribe((data) => console.log(data));

    //HTTP REQUEST
    //The standard is that whenever you subscribe to a stream you unsubscribe from it
    //otherwise it might cause performance issues
    this.roomService.getPhotos().subscribe((event) => {
      console.log('Photos: ', event);
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Request Success!');
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes += event.loaded; //how much data is loaded
          break;
        case HttpEventType.Response:
          console.log(event.body);
          break;

        default:
          break;
      }
    });
  }

  //In developer mode ull get NG0100 error, dont worry about it, worry if its in production mode
  ngAfterViewInit(): void {
    this.headerComponent.title = 'First Title';
    console.log('headerComponent: ', this.headerComponent);
    this.headerChildrenComponent.last.title = 'Last Title';
    for (let header of this.headerChildrenComponent['_results']) {
      header.title = 'gg wp';
    }
    console.log('headerChildrenComponent: ', this.headerChildrenComponent);
  }

  //At this point, angular has completed one lifecycle check already
  ngAfterViewChecked() {
    // this.headerComponent.title = "Rooms View";
    // console.log('headerComponent: ',this.headerComponent);
    // console.log('headerChildrenComponent: ',this.headerChildrenComponent);
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  //Http put (post a room)
  addRoom() {
    //We will eventually replace this hardcoded data with a form
    const room: RoomList = {
      roomNumber: '',
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
    //this.roomsList = [...this.roomsList, room];

    //Calling Http Put request
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomsList = data;
    });
  }

  //Http put (edit a room)
  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'EditedRoom',
      amenities: 'Edited Room',
      price: 499,
      photos: 'edited.jpg',
      checkinTime: new Date('30-Nov-2023'),
      checkoutTime: new Date(),
      rating: 9.115,
    };

    this.roomService.editRoom(room).subscribe((data) => {
      this.roomsList = data;
    });
  }

  //Http delete
  deleteRoom() {
    this.roomService.delete('3').subscribe((data) => {
      this.roomsList = data;
    });
  }

  ngOnDestroy(){
    //Whenever this component is destroyed we also want to destroy
    //the subscription because we dont need it to be available in memory anymore
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}

//Split the code into services, try to keep your components as simple (less lines of code) as possible

//RXJS works with PUSH Architecture
//getData -> continous stream of data -> addData
//Whenever the stream is updated Whoever is subscribed to it will get the data

//You dont have to call the getData function again, thats PULL based architecture
