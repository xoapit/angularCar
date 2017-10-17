import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { BaseLayoutComponent } from './base/base.component';
// import { HeaderComponent } from './header/header.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { SidebarNavComponent } from './sidebar/nav/nav.component';

const COMPONENTS = [
  BaseLayoutComponent
  // HeaderComponent,
  // SidebarComponent
];

@NgModule({
  imports: [SharedModule],
  providers: [],
  declarations: [
    // SidebarNavComponent,
    ...COMPONENTS
  ],
  exports: COMPONENTS
})
export class LayoutModule {}
