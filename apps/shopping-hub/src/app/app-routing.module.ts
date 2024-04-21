import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@code-hub/auth/ui').then(({ AuthUiModule }) => AuthUiModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('@code-hub/products/ui').then(
        ({ ProductsUiModule }) => ProductsUiModule
      ),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('@code-hub/error/ui').then(({ ErrorUiModule }) => ErrorUiModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'error',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule {}
