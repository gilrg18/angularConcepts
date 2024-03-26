import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
//First use case: This API url will be used in multiple services so it has to be imported everywhere,
//VALUE PROVIDERS help resolve this use case.
@Injectable({
  //This will take care of registering your service to your apps root module
  //Youre getting a SINGLE instance of your service, no matter how many times
  //you call it in #x components, the services is just instanced once (singleton)
  //This creates a 'global instance' of RoomsService
  providedIn: 'root',
})
//What is a service? a reusable class where you can put some business logic
//and access it inside your components
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log('Api Endpoint: ',this.config.apiEndpoint);
    console.log('Rooms Service Initialized');
  }

  //VALUE PROVIDERS
  getRooms() {
    return this.roomsList;
  }
}
