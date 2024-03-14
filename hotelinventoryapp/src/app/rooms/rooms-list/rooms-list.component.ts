import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent implements OnInit{
  //Decorator Input to receive data 
  //"Make this 'rooms' property a valid html property on 'hinv-rooms-list' html element"
  @Input() rooms: RoomList[] = [];

  //Pass the data back from child to parent component
  //Outputs are events
  @Output() selectedRoom = new EventEmitter<RoomList>()

  constructor(){}

  ngOnInit(): void {
    
  }
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}

