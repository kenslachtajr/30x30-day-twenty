import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Fruit } from '@ngrx-fruits/core-data';

@Component({
  selector: 'ngrx-fruits-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.css']
})
export class FruitsListComponent {
  @Input() fruits: Fruit[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
