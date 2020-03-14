import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService, Fruit, emptyFruit } from '@ngrx-fruits/core-data';
import { FruitsFacade } from '@ngrx-fruits/core-state';
import { Observable } from 'rxjs';
@Component({
  selector: 'ngrx-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  form: FormGroup;
  selectedFruit$: Observable<Fruit> = this.fruitsFacade.selectedFruit$;
  fruits$: Observable<Fruit[]> = this.fruitsFacade.allFruits$;

  constructor(
    private fruitsFacade: FruitsFacade,
    private formbuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.fruitsFacade.loadFruits();
    this.fruitsFacade.mutations$.subscribe(() => this.resetFruit());
  }

  selectFruit(fruit: Fruit) {
    this.fruitsFacade.selectFruit(fruit.id);
    this.form.patchValue(fruit);
  }

  resetFruit() {
    this.form.reset();
    this.selectFruit(emptyFruit);
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  createFruit() {
    this.notify.notification(`You have created ${this.form.value.name}`);
    this.fruitsFacade.createFruit(this.form.value);
  }

  cancel() {
    this.resetFruit();
    this.form.reset();
  }

  saveFruit(fruit: Fruit) {
    if (fruit.id) {
      this.updateFruit();
    } else {
      this.createFruit();
    }
  }

  updateFruit() {
    this.notify.notification(`You have updated ${this.form.value.name}`);
    this.fruitsFacade.updateFruit(this.form.value);
  }

  deleteFruit(fruit: Fruit) {
    this.notify.notification(`You have deleted ${fruit.name}`);
    this.fruitsFacade.deleteFruit(fruit);
  }

  private initForm() {
    this.form = this.formbuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      details: ['', Validators.compose([Validators.required])],
      tasteLevel: '',
      approved: null
    });
  }
}
