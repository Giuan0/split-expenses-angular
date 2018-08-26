import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})

export class SimpleListComponent implements OnInit {

  @Input() title: string;
  @Input() items: Item[];
  @Output() itemEvent: EventEmitter<Item> = new EventEmitter();
  @Output() plussButtonAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  action(item: Item) {
    // console.log(this.items);
    this.itemEvent.emit(item);
  }

  plussButtonActionEmitter() {
    this.plussButtonAction.emit();
  }
}
