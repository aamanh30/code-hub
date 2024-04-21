import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsStateModule } from '@code-hub/products/state';
import { ProductsUiRoutingModule } from './products-ui-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, ProductsUiRoutingModule, ProductsStateModule],
  declarations: [MainComponent],
})
export class ProductsUiModule {}
