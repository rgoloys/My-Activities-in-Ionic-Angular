import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route2Page } from './route2.page';

const routes: Routes = [
  {
    path: '',
    component: Route2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Route2PageRoutingModule {}
