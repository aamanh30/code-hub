import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { fetchProducts, fetchProductsSuccess } from './products.actions';
import { Product } from '../models/product';
import { PRODUCTS_FEATURE_KEY } from './products-key';

export type ProductsState = EntityState<Product> & {
  selectedId: string | undefined; // which Products record has been selected
};

export type ProductsPartialState = {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
};

export const productsAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>();

export const initialProductsState: ProductsState =
  productsAdapter.getInitialState({
    selectedId: undefined,
  });

const reducer = createReducer(
  initialProductsState,
  on(fetchProducts, (): ProductsState => initialProductsState),
  on(fetchProductsSuccess, (state, { products }) =>
    productsAdapter.setAll(products, { ...state })
  )
);

export const productsReducer = (
  state: ProductsState | undefined,
  action: Action
) => reducer(state, action);
