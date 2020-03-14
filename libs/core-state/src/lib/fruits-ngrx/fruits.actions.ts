import { createAction, props } from '@ngrx/store';
import { Fruit } from '@ngrx-fruits/core-data';

export const fruitSelected = createAction(
  '[FRUIT] Fruit Selected',
  props<{selectedFruitId: string | number}>()
);

export const loadFruits = createAction(
  '[FRUIT] Load Fruits',
);

export const fruitsLoaded = createAction(
  '[FRUIT] Fruits Loaded',
  props<{ fruits: Fruit[] }>()
);

export const loadFruit = createAction(
  '[FRUIT] Load Fruit',
  props<{ fruit: Fruit }>()
);

export const fruitLoaded = createAction(
  '[FRUIT] Fruit Loaded',
  props<{ fruit: Fruit }>()
);

export const createFruit = createAction(
  '[FRUIT] Create Fruit',
  props<{ fruit: Fruit }>()
);

export const fruitCreated = createAction(
  '[FRUIT] Fruit Created',
  props<{ fruit: Fruit }>()
);

export const updateFruit = createAction(
  '[FRUIT] Update Fruit',
  props<{ fruit: Fruit }>()
);

export const fruitUpdated = createAction(
  '[FRUIT] Fruit Updated',
  props<{ fruit: Fruit }>()
);

export const deleteFruit = createAction(
  '[FRUIT] Delete Fruit',
  props<{ fruit: Fruit }>()
);

export const fruitDeleted = createAction(
  '[FRUIT] Fruit Deleted',
  props<{ fruit: Fruit }>()
);
