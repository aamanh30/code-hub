import { Component, OnInit } from '@angular/core';
import {
  ProductsActions,
  ProductsFeature,
  ProductsSelectors,
} from '@code-hub/products/state';
import { ProgressFeature, ProgressSelectors } from '@code-hub/progress/state';
import { Product, ProgressType } from '@code-hub/shared/state';
import { Store } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'code-hub-products-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  products$: Observable<Product[]> = EMPTY;
  loading$: Observable<boolean> = EMPTY;

  constructor(
    private readonly store: Store<
      ProductsFeature.ProductsPartialState &
        ProgressFeature.ProgressPartialState
    >
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.select(ProductsSelectors.products);
    this.loading$ = this.store.select(
      ProgressSelectors.hasSpecificActionInProgress(
        ProductsActions.fetchProducts.type
      )
    );

    this.store.dispatch(
      ProductsActions.fetchProducts({
        progressType: ProgressType.start,
      })
    );
  }
}
