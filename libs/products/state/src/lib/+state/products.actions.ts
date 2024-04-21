import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { PRODUCTS_FEATURE_KEY } from './products-key';
import { Product } from '../models/product';

export const { fetchProducts, fetchProductsError, fetchProductsSuccess } =
  createActionGroup({
    source: PRODUCTS_FEATURE_KEY,
    events: {
      fetchProducts: emptyProps(),
      fetchProductsSuccess: props<{ products: Product[] }>(),
      fetchProductsError: props<{ error: Partial<Error> }>(),
    },
  });
