import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.scss'],
})
export class ViewInfoComponent implements OnInit {

  number2: any;
  result= 0;
  constructor(private mdlCtrl: ModalController, private navParams: NavParams) { }

  data = this.navParams.get('data');
  ngOnInit() {}

  Add(){
    this.result = parseInt(this.data) + parseInt(this.number2);
    return this.mdlCtrl.dismiss({Fnumb: this.data, Snumb: this.number2, Rnumb: this.result}, "+")
  }
  Subtract(){
    this.result = parseInt(this.data) - parseInt(this.number2);
    return this.mdlCtrl.dismiss({Fnumb: this.data, Snumb: this.number2, Rnumb: this.result}, "-")
  }
  Multiply(){
    this.result = parseInt(this.data) * parseInt(this.number2);
    return this.mdlCtrl.dismiss({Fnumb: this.data, Snumb: this.number2, Rnumb: this.result}, "*")
  }
  Devide(){
    this.result = parseInt(this.data) / parseInt(this.number2);
    return this.mdlCtrl.dismiss({Fnumb: this.data, Snumb: this.number2, Rnumb: this.result}, "/")
  }

  cancel_modal(){
    return this.mdlCtrl.dismiss("Canceled Action", "cancel");
  }

}
