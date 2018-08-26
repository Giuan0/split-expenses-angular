import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  @Input() title: string;
  @Input() placeholder: string;

  @Output() confirmEvent: EventEmitter<string> = new EventEmitter();
  @Output() cancelEvent: EventEmitter<any> = new EventEmitter();

  input: string;

  constructor() { }

  ngOnInit() {
  }

  emitCancelEvent() {
    this.cancelEvent.emit();
  }

  emitConfirmEvent() {
    this.confirmEvent.emit(this.input);
  }

}
