import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
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

  //ShareReplay RxJs Operators
  //We cannot modify the stream after we subscribe to it
  //A stream can be modified inside a function called pipe()
  //The $ syntax is to know this variable is a stream
  getRooms$ = this.http.get<RoomList[]>('http://localhost:3000/api/rooms').pipe(
    //Now we have the data available multiple times because we are caching the first request
    //so we dont have to make unnecesary multiple calls.
    shareReplay(1)
  );

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

  //HTTP Delete
  delete(id: string){
    return this.http.delete<RoomList[]>(`http://localhost:3000/api/rooms/${id}`);
  }

  //HTTP REQUEST API
  getPhotos(){
    //we will use a fake api: https://jsonplaceholder.typicode.com/photos
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true,

    })
    return this.http.request(request)
  }


}
