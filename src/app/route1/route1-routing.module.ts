import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route1Page } from './route1.page';

const routes: Routes = [
  {
    path: '',
    component: Route1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Route1PageRoutingModule {}
