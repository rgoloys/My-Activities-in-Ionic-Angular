import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route4Page } from './route4.page';

const routes: Routes = [
  {
    path: '',
    component: Route4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Route4PageRoutingModule {}
