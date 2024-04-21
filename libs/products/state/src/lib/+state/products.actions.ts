import { createActionGroup, props } from '@ngrx/store';
import {
  StartProgressDecorators,
  StopProgressDecorators,
} from '@code-hub/progress/state';

import { PRODUCTS_FEATURE_KEY } from './products-key';
import { Product } from '../models/product';

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
