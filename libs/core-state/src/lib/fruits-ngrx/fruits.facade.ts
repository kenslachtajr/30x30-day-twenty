import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromFruits from './fruits.reducer';
import * as fruitsActions from './fruits.actions';
import * as fruitsSelectors from './fruits.selector';
import { Fruit } from '@ngrx-fruits/core-data';

@Injectable({
  providedIn: 'root'
})
export class FruitsFacade {
  allFruits$ = this.store.pipe(
    select(fruitsSelectors.selectAllFruits)
  );
  selectedFruit$ = this.store.pipe(
    select(fruitsSelectors.selectFruit)
  );
  fruitsLoading$ = this.store.pipe(
    select(fruitsSelectors.selectFruitsLoading)
  );
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === fruitsActions.createFruit({} as any).type ||
        action.type === fruitsActions.updateFruit({} as any).type ||
        action.type === fruitsActions.deleteFruit({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromFruits.FruitsPartialState>
  ) {}

  selectFruit(selectedFruitId: string | number) {
    this.dispatch(
      fruitsActions.fruitSelected({ selectedFruitId })
    );
  }

  loadFruits() {
    this.dispatch(fruitsActions.loadFruits());
  }

  loadFruit(fruit: Fruit) {
    this.dispatch(fruitsActions.loadFruit({ fruit }));
  }

  createFruit(fruit: Fruit) {
    this.dispatch(fruitsActions.createFruit({ fruit }));
  }

  updateFruit(fruit: Fruit) {
    this.dispatch(fruitsActions.updateFruit({ fruit }));
  }

  deleteFruit(fruit: Fruit) {
    this.dispatch(fruitsActions.deleteFruit({ fruit }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
