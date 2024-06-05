import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route3Page } from './route3.page';

const routes: Routes = [
  {
    path: '',
    component: Route3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Route3PageRoutingModule {}
