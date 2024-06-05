import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Route3PageRoutingModule } from './route3-routing.module';

import { Route3Page } from './route3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Route3PageRoutingModule
  ],
  declarations: [Route3Page]
})
export class Route3PageModule {}
