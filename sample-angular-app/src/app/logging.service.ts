import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  lastlog : string;
  constructor() { }

  printLog(message: string){
    console.log(message);
    console.log('old message:'+ this.lastlog);
    this.lastlog = message;
  }
}
