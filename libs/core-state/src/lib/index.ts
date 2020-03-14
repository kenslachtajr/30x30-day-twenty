import { ActionReducerMap } from '@ngrx/store';
import * as fromFruits from './fruits-ngrx/fruits.reducer';

export interface AppState {
  fruits: fromFruits.FruitsState;
}

export const reducers: ActionReducerMap<AppState> = {
  fruits: fromFruits.reducer
};

export const defaultState: AppState = {
  fruits: { ids: [] } as fromFruits.FruitsState
};
