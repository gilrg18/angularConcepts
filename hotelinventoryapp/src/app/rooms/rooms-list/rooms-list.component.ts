import { Component, OnInit, Input } from '@angular/core';
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

  constructor(){}

  ngOnInit(): void {
    
  }
}
