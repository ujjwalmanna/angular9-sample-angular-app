import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sample-angular-app';
  @Input() loaded_action: string = 'shopping-list';

  constructor(private authService: AuthService, private loggingService: LoggingService) { }
  ngOnInit(): void {
    this.authService.autologin();
    this.loggingService.printLog('hello from app componet');
  }
  


}
