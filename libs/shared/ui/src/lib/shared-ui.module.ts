import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxedLayoutComponent } from './layouts/boxed-layout/boxed-layout.component';
import { FullWidthLayoutComponent } from './layouts/full-width-layout/full-width-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BoxedLayoutComponent, FullWidthLayoutComponent],
})
export class SharedUiModule {}
