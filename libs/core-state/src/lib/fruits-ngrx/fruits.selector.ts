import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FRUITS_FEATURE_KEY,
  fruitsAdapter,
  FruitsPartialState,
  FruitsState
} from './fruits.reducer';

export const selectFruitsState = createFeatureSelector<
  FruitsPartialState,
  FruitsState
>(FRUITS_FEATURE_KEY);

const { selectAll, selectEntities } = fruitsAdapter.getSelectors();

export const selectFruitsLoading = createSelector(
  selectFruitsState,
  (state: FruitsState) => selectAll(state)
);

export const selectAllFruits = createSelector(
  selectFruitsState,
  (state: FruitsState) => selectAll(state)
);

export const selectFruitsEntities = createSelector(
  selectFruitsState,
  (state: FruitsState) => selectEntities(state)
);

export const selectFruitId = createSelector(
  selectFruitsState,
  (state: FruitsState) => state.selectedFruitId
);

export const selectFruit = createSelector(
  selectFruitsEntities,
  selectFruitId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
