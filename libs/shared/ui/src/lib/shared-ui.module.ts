import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxedLayoutComponent } from './layouts/boxed-layout/boxed-layout.component';
import { FullWidthLayoutComponent } from './layouts/full-width-layout/full-width-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BoxedLayoutComponent,
    FooterComponent,
    FullWidthLayoutComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  exports: [BoxedLayoutComponent, FullWidthLayoutComponent],
})
export class SharedUiModule {}
