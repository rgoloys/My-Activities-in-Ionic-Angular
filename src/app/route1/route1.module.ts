import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Route1PageRoutingModule } from './route1-routing.module';

import { Route1Page } from './route1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Route1PageRoutingModule
  ],
  declarations: [Route1Page]
})
export class Route1PageModule {}
