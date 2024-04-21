import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FullWidthLayoutComponent, SharedUiModule } from '@code-hub/shared/ui';

const routes: Route[] = [
  {
    path: '',
    component: FullWidthLayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
    ],
  },
];

@NgModule({
  imports: [SharedUiModule, RouterModule.forChild(routes)],
})
export class ProductsUiRoutingModule {}
