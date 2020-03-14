import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as fruitsActions from './fruits.actions';
import { Fruit } from '@ngrx-fruits/core-data';

export const FRUITS_FEATURE_KEY = 'fruits';

export interface FruitsState extends EntityState<Fruit> {
  selectedFruitId?: string | number;
  isLoading: boolean;
}

export interface FruitsPartialState {
  readonly [FRUITS_FEATURE_KEY]: FruitsState;
}

export const fruitsAdapter: EntityAdapter<
  Fruit
> = createEntityAdapter<Fruit>();

export const initialState: FruitsState = fruitsAdapter.getInitialState(
  {
    selectedFruitId: null,
    isLoading: false
  }
);

const fruitsReducer = createReducer(
  initialState,
  on(
    fruitsActions.fruitSelected,
    (state, { selectedFruitId }) =>
      Object.assign({}, state, { selectedFruitId })
  ),
  on(fruitsActions.fruitsLoaded, (state, { fruits }) =>
    fruitsAdapter.setAll(fruits, { ...state, isLoading: false })
  ),
  on(fruitsActions.fruitCreated, (state, { fruit }) =>
    fruitsAdapter.addOne(fruit, { ...state, isLoading: false })
  ),
  on(fruitsActions.fruitUpdated, (state, { fruit }) =>
    fruitsAdapter.upsertOne(fruit, { ...state, isLoading: false })
  ),
  on(fruitsActions.fruitDeleted, (state, { fruit }) =>
  fruitsAdapter.removeOne(fruit.id, {
      ...state,
      isLoading: false
    })
  ),
  on(
    fruitsActions.loadFruits,
    fruitsActions.createFruit,
    fruitsActions.updateFruit,
    fruitsActions.deleteFruit,
    state => ({
      ...state,
      isLoading: true
    })
  )
);

export function reducer(state: FruitsState | undefined, action: Action) {
  return fruitsReducer(state, action);
}
