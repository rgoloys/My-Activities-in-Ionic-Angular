import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Route4PageRoutingModule } from './route4-routing.module';

import { Route4Page } from './route4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Route4PageRoutingModule
  ],
  declarations: [Route4Page]
})
export class Route4PageModule {}
