import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onClose() {
    this.close.emit();
  }
}
