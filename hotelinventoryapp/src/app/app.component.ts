import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoggerService } from './logger/logger.service';
import { LocalStorageToken } from './localstorage.token';

@Component({
    selector: 'hinv-root',
    standalone: true,
    templateUrl: './hinv.component.html',
    // template:  `<h1>Hello World from inline template!</h1>
    // <p>Angular is awesome</p>`,
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RoomsComponent, CommonModule, ContainerComponent, EmployeeComponent]
})

//when we use ViewChild, the static property is false, so we need to use AfterViewInit
//so the parent renders before the child
export class AppComponent implements OnInit{
  title = 'hotelinventoryapp';

  loginType = 'Admin'

  @ViewChild('name',{static: true}) name!: ElementRef;


  //@Optional - Instead of throwing an error, it returns null if the service is not found.
  constructor(@Optional() private loggerService: LoggerService,
  @Inject(LocalStorageToken) private localStorage: Storage){

  }

  ngOnInit() {
    this.loggerService?.Log('LoggerService at AppComponent.ngOnInit()');
    console.log('name: ',this.name.nativeElement.innerText = 'Gil Gil Gil')
    
    this.localStorage.setItem('name', 'GRG');
  }

  // @ViewChild('user',{ read: ViewContainerRef} ) vcr!: ViewContainerRef;

  //ngAfterViewInit(): void {
    // const componentRef = this.vcr.createComponent(RoomsComponent)
    // componentRef.instance.numberOfRooms = 50;
  //}
}
