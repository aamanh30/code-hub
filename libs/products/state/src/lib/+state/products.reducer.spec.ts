import { Action } from '@ngrx/store';

import { fetchProductsSuccess } from './products.actions';
import { initialProductsState, productsReducer } from './products.reducer';
import { Product } from '@code-hub/shared/state';

describe('Products Reducer', () => {
  const createProductsEntity = (id: string, name = ''): Product => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Products actions', () => {
    it('loadProductsSuccess should return the list of known Products', () => {
      const products = [
        createProductsEntity('PRODUCT-AAA'),
        createProductsEntity('PRODUCT-zzz'),
      ];

      const state = productsReducer(
        initialProductsState,
        fetchProductsSuccess({ products })
      );

      expect(state.ids).toStrictEqual(products.map(({ id }) => id));
      expect(state.entities).toStrictEqual(
        Object.fromEntries(products.map((product) => [product.id, product]))
      );
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      expect(productsReducer(initialProductsState, <Action>{})).toBe(
        initialProductsState
      );
    });
  });
});
