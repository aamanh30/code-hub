import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, of, concatMap } from 'rxjs';
import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
} from './products.actions';

@Injectable()
export class ProductsEffects {
  #actions$ = inject(Actions);

  fetchProducts$ = createEffect(() =>
    this.#actions$.pipe(
      ofType(fetchProducts),
      concatMap(() => of(fetchProductsSuccess({ products: [] }))),
      catchError((error) => of(fetchProductsError({ error })))
    )
  );
}
