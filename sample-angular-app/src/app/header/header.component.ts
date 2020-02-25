import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() featureSelected=new EventEmitter();
  
  onSelect(action:string){
    console.log('action:'+action);
    this.featureSelected.emit(action);
  }
  ngOnInit(): void {
  }

}
