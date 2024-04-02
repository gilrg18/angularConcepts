import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
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
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig, 
  private http: HttpClient) {
    //USING HTTPCLIENT to make our first api call.
    console.log('Api Endpoint: ',this.config.apiEndpoint);
    console.log('Api Endpoint: ',this.http)
    console.log('Rooms Service Initialized');
  }

  //VALUE PROVIDERS
  getRooms() {
    //since we have a proxy configured with "http://localhost:3000" we dont need to call 
    //"http://localhost:3000" sinde the url <- proxy didnt work lol so added manually now we have CORS issue
    return this.http.get<RoomList[]>('http://localhost:3000/api/rooms');
  }

  //HTTP Put (post Room)
  addRoom(room: RoomList){
    return this.http.post<RoomList[]>('http://localhost:3000/api/rooms', room);
  }

  //HTTP Put (edit Room)
  editRoom(room: RoomList){
    return  this.http.put<RoomList[]>(`http://localhost:3000/api/rooms/${room.roomNumber}`, room);
  }
}
