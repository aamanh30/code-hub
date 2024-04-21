import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState, productsAdapter } from './products.reducer';
import { PRODUCTS_FEATURE_KEY } from './products-key';

// Lookup the 'Products' feature state managed by NgRx
const productsState =
  createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY);

const { selectAll, selectEntities } = productsAdapter.getSelectors();

export const products = createSelector(productsState, selectAll);

const selectedId = createSelector(
  productsState,
  ({ selectedId }: ProductsState) => selectedId
);

export const selectedProductDetails = createSelector(
  selectEntities,
  selectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
