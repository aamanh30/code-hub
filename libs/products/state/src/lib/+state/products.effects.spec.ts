import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { fetchProducts, fetchProductsSuccess } from './products.actions';
import { ProductsEffects } from './products.effects';

describe('ProductsEffects', () => {
  let actions: Observable<Action>;
  let effects: ProductsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ProductsEffects);
  });

  describe('fetchProducts$', () => {
    it('should dispatch fetch products success action', () => {
      actions = hot('-a|', { a: fetchProducts() });

      expect(effects.fetchProducts$).toBeObservable(
        hot('-a|', {
          a: fetchProductsSuccess({ products: [] }),
        })
      );
    });
  });
});
