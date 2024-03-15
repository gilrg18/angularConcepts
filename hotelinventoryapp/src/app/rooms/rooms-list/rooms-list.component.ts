import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { RoomList } from '../rooms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css',
  //Change Detection and ngOnChanges
  //onPush can be used in case im not modifying any internal data in this component
  //In this case it changes data that comes from outside
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
  //Decorator Input to receive data
  //"Make this 'rooms' property a valid html property on 'hinv-rooms-list' html element"
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  //You can only apply ngOnChange in components that have @Input property
  //ngOnChanges only works when you have Input properties and those properties get a new value
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES: ', changes);
    // console.log(
    //   'Access specific property roomType: ',
    //   changes['rooms'].currentValue[changes['rooms'].currentValue.length - 1]
    //     .roomType
    // );
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  //Pass the data back from child to parent component
  //Outputs are events
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit(): void {}
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  //When our component is destroyed, trigger something
  //Useful when having memory consuming code and you want to free some memory
  //For example you want to remove something from localStorage/sessionStorage
  //Most of the time this hook will be used to unsubscribe for data  (topic to be seen)
  ngOnDestroy(): void {
    console.log('DESTROYED');
  }
}
