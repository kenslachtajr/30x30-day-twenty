import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as fruitsActions from './fruits.actions';
import { FruitsFacade } from './fruits.facade';
import {
  Fruit,
  FruitsService,
  NotifyService
} from '@ngrx-fruits/core-data';
import { FruitsPartialState } from './fruits.reducer';

@Injectable()
export class FruitsEffects {
  loadFruits$ = createEffect(() =>
    this.dataPersistence.fetch(fruitsActions.loadFruits, {
      run: (
        action: ReturnType<typeof fruitsActions.loadFruits>,
        state: FruitsPartialState
      ) => {
        return this.fruitsService
          .all()
          .pipe(
            map((fruits: Fruit[]) =>
            fruitsActions.fruitsLoaded({ fruit })
            )
          );
      },
      onError: (
        action: ReturnType<typeof fruitsActions.loadFruits>,
        error
      ) => {
        this.notify.notification('Effect Load All Error', error);
      }
    })
  );

  loadFruit$ = createEffect(() =>
    this.dataPersistence.fetch(fruitsActions.loadFruit, {
      run: (
        action: ReturnType<typeof fruitsActions.loadFruit>,
        state: FruitsPartialState
      ) => {
        return this.fruitsService
          .findOne(action.fruit)
          .pipe(
            map((fruit: Fruit) =>
            fruitsActions.fruitLoaded({ fruit })
            )
          );
      },
      onError: (
        action: ReturnType<typeof fruitsActions.loadFruit>,
        error
      ) => {
        this.notify.notification('Effect Load Error', error);
      }
    })
  );

  selectFruitOnLoad$ = createEffect(() =>
    this.dataPersistence.actions.pipe(
      ofType(fruitsActions.fruitLoaded),
      map(({ fruit }) =>
        fruitsActions.fruitSelected({
          selectedFruitId: fruit.id
        })
      )
    )
  );

  createFruit$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(
      fruitsActions.createFruit,
      {
        run: (
          action: ReturnType<typeof fruitsActions.createFruit>,
          state: FruitsPartialState
        ) => {
          return this.fruitsService
            .create(action.fruit)
            .pipe(
              map((fruit: Fruit) =>
              fruitsActions.fruitCreated({ fruit })
              )
            );
        },
        onError: (
          action: ReturnType<typeof fruitsActions.createFruit>,
          error
        ) => {
          this.notify.notification('Effect Create Error', error);
        }
      }
    )
  );

  updateFruit$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(
      fruitsActions.updateFruit,
      {
        run: (
          action: ReturnType<typeof fruitsActions.updateFruit>,
          state: FruitsPartialState
        ) => {
          return this.fruitsService
            .update(action.fruit)
            .pipe(
              map((fruit: Fruit) =>
                fruitsActions.fruitUpdated({ fruit })
              )
            );
        },
        onError: (
          action: ReturnType<typeof fruitsActions.updateFruit>,
          error
        ) => {
          this.notify.notification('Effect Update Error', error);
        }
      }
    )
  );

  deleteFruits$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(
      fruitsActions.deleteFruit,
      {
        run: (
          action: ReturnType<typeof fruitsActions.deleteFruit>,
          state: FruitsPartialState
        ) => {
          return this.fruitsService
            .delete(action.fruit)
            .pipe(
              map(() =>
                fruitsActions.fruitDeleted({
                  fruit: action.fruit
                })
              )
            );
        },
        onError: (
          action: ReturnType<typeof fruitsActions.deleteFruit>,
          error
        ) => {
          this.notify.notification('Effect Delete Error', error);
        }
      }
    )
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<FruitsPartialState>,
    private fruitsService: FruitsService,
    private fruitsFacade: FruitsFacade,
    private notify: NotifyService
  ) {}
}
