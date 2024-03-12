import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './hinv.component.html',
  // template:  `<h1>Hello World from inline template!</h1>
  // <p>Angular is awesome</p>`,
  styleUrl: './app.component.css',
  //styles: [`h1{color:red}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';
}
