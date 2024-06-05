import { Component, OnInit } from '@angular/core';
import { IonButton, NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SalaryPage } from '../salary/salary.page';
import { AlertController } from '@ionic/angular';
import { ok } from 'assert';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.page.html',
  styleUrls: ['./formula.page.scss'],
})
export class FormulaPage implements OnInit {

  day_work: any;
  salary_day: any;
  deduction: any;
  result= 0;
  RhideMe = true;

  constructor(private mdlCtrl: ModalController, private navParams: NavParams, private alertController: AlertController) { }

  name = this.navParams.get('name');
  address = this.navParams.get('address');
  
  data = this.navParams.get('data');

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Please Insert data!',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ok_modal(){
    this.function();
    return;
  }

  cancel_modal(){
    return this.mdlCtrl.dismiss("Canceled Action", "cancel");
  }

  function(){
    if(this.day_work == null || this.salary_day == null || this.deduction == null){
      this.presentAlert();
    }else if(this.day_work == 0 || this.salary_day == 0 || this.deduction == 0){
      this.presentAlert();
      
    }else{
      this.result = parseFloat(this.day_work) * parseFloat(this.salary_day) - parseFloat(this.deduction);
      this.RhideMe = true; 
      this.mdlCtrl.dismiss({day_work: this.day_work, salary_day: this.salary_day, deduction:this.deduction, result: this.result, RhideMe:this.RhideMe}, "result")  
    }
  }
}
