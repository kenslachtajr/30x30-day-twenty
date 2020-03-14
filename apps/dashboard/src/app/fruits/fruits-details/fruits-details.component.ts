import { Fruit } from '@ngrx-fruits/core-data';
import { Component, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'ngrx-fruits-fruits-details',
  templateUrl: './fruits-details.component.html',
  styleUrls: ['./fruits-details.component.css']
})
export class FruitsDetailsComponent {
  currentFruit: Fruit;
  originalTitle;
  @Input() set fruit(value) {
    if (value) this.originalTitle = value.name;
    this.currentFruit = Object.assign({}, value);
  }
  @Input() form;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
