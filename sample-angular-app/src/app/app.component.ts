import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-angular-app';
  @Input() loaded_action:string='shopping-list'
  
  onNavigate(feature:string){
    console.log('loaded-action:'+feature)
    this.loaded_action=feature;
  }
}
