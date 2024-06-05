import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormulaComponent } from './formula/formula.component';
import { FormulaPage } from '../formula/formula.page';
import { AlertController } from '@ionic/angular';
//import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-salary',
  templateUrl: './salary.page.html',
  styleUrls: ['./salary.page.scss'],
})
export class SalaryPage implements OnInit {

  FhideMe = false;
  name: any;
  address: any;
  showRes= 0;
  showWork =0;
  showSalary = 0;
  showDeduct = 0;
  constructor(private mdlCtrl: ModalController, private alertController: AlertController) { }

  //data = this.navParams.get('showRes');
  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Please Insert Data !',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async open_formula(name: any, address: any){

    const open_formula = await this.mdlCtrl.create({
      component: FormulaPage,
      componentProps: {data : name, address}
    });

    if(name == null || address == null){
      this.presentAlert();
    }else{
      open_formula.present();
    }

   

    const { data } = await open_formula.onWillDismiss();
    if(data.day_work == null || data.salary_day == null || data.deduction == null || data.result == null){
      this.FhideMe = false;
    }else{
      this.showWork= (data.day_work);
      this.showSalary= (data.salary_day);
      this.showDeduct= (data.deduction);
      this.showRes= (data.result);
      this.FhideMe= (data.RhideMe);
    }
  }
}
