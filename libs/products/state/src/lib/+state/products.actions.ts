import { createActionGroup, props } from '@ngrx/store';
import {
  Product,
  StartProgressDecorators,
  StopProgressDecorators,
} from '@code-hub/shared/state';

import { PRODUCTS_FEATURE_KEY } from './products-key';

export const { fetchProducts, fetchProductsError, fetchProductsSuccess } =
  createActionGroup({
    source: PRODUCTS_FEATURE_KEY,
    events: {
      fetchProducts: props<StartProgressDecorators>(),
      fetchProductsSuccess: props<
        { products: Product[] } & StopProgressDecorators
      >(),
      fetchProductsError: props<StopProgressDecorators>(),
    },
  });
