import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GOLOYAPageRoutingModule } from './goloya-routing.module';

import { GOLOYAPage } from './goloya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GOLOYAPageRoutingModule
  ],
  declarations: [GOLOYAPage]
})
export class GOLOYAPageModule {}
