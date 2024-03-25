import { Injectable } from '@angular/core';

@Injectable(
  //We create the scenario where this service is not registered by removing root property
  //(No provider for LoggerService error!)
  //With @Optional, Instead of throwing an error, it returns null if the service is not found.
)

//We want to use this LoggerService during DEVELOPMENT, not during PRODUCTION
export class LoggerService {

  constructor() { }

  Log(msg: string){
    console.log(msg);
  }
}
