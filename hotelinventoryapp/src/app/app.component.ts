import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './hinv.component.html',
    // template:  `<h1>Hello World from inline template!</h1>
    // <p>Angular is awesome</p>`,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RoomsComponent, CommonModule]
})

//when we use ViewChild, the static property is false, so we need to use AfterViewInit
//so the parent renders before the child
export class AppComponent implements AfterViewInit{
  title = 'hotelinventoryapp';

  loginType = 'Admin'

  @ViewChild('user',{ read: ViewContainerRef} ) vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent)
    componentRef.instance.numberOfRooms = 50;
  }
}
