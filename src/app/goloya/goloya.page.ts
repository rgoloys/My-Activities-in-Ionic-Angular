import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewInfoComponent } from './view-info/view-info.component';

@Component({
  selector: 'app-goloya',
  templateUrl: './goloya.page.html',
  styleUrls: ['./goloya.page.scss'],
})
export class GOLOYAPage implements OnInit {

  number = 0;
  showRes : any;
  constructor(private mdlCtrl: ModalController) { }

  ngOnInit() {
  }

  async view_info(number:any){

    const model_view_info = await this.mdlCtrl.create({
      component: ViewInfoComponent,
      componentProps: {data : number}
    });

    model_view_info.present();

    const { data, role } = await model_view_info.onWillDismiss();
    this.showRes=(" "+data.Rnumb);

  }

}

