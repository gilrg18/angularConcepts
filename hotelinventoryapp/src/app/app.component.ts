import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './hinv.component.html',
    // template:  `<h1>Hello World from inline template!</h1>
    // <p>Angular is awesome</p>`,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RoomsComponent]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
