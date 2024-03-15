import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
@Injectable({
  providedIn: 'root',
})
export class RoomsService {

  roomsList: RoomList[] = [
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

  constructor() {}

  getRooms() {
    return this.roomsList;
  }
}
