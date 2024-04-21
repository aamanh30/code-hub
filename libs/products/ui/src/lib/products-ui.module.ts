import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsStateModule } from '@code-hub/products/state';

@NgModule({
  imports: [CommonModule, ProductsStateModule],
})
export class ProductsUiModule {}
