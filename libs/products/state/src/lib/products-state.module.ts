import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productsReducer } from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';
import { PRODUCTS_FEATURE_KEY } from './+state/products-key';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PRODUCTS_FEATURE_KEY, productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
  ],
})
export class ProductsStateModule {}
