import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Route2PageRoutingModule } from './route2-routing.module';

import { Route2Page } from './route2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Route2PageRoutingModule
  ],
  declarations: [Route2Page]
})
export class Route2PageModule {}
