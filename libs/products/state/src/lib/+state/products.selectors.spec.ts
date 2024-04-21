import { PRODUCTS_FEATURE_KEY } from './products-key';
import {
  productsAdapter,
  ProductsPartialState,
  initialProductsState,
} from './products.reducer';
import { products as productsSelector } from './products.selectors';

describe('Products Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const createProductsEntity = (id: string, name = '') => ({
    id,
    name: name || `name-${id}`,
  });
  const products = [
    createProductsEntity('PRODUCT-AAA'),
    createProductsEntity('PRODUCT-BBB'),
    createProductsEntity('PRODUCT-CCC'),
  ];

  let state: ProductsPartialState;
  const emptyState: ProductsPartialState = {
    [PRODUCTS_FEATURE_KEY]: initialProductsState,
  };

  beforeEach(() => {
    state = {
      [PRODUCTS_FEATURE_KEY]: productsAdapter.setAll(products, {
        ...initialProductsState,
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true,
      }),
    };
  });

  describe('products', () => {
    it('should return the list of products', () => {
      expect(productsSelector(state)).toBe(products);
    });

    it('should return empty when no products exist in the state', () => {
      expect(productsSelector(emptyState)).toBe([]);
    });
  });
});
