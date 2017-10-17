import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { HomeComponent } from '../pages/home/home.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), PagesModule],
  declarations: [],
  exports: [RouterModule]
})
export class RoutesModule {}
