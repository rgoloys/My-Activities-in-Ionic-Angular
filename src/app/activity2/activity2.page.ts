import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-activity2',
  templateUrl: './activity2.page.html',
  styleUrls: ['./activity2.page.scss'],
})
export class Activity2Page implements OnInit {

  no1 = "";
  no2 = "";
  result = 0;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Please Insert your name',
 
      buttons: ['OK'],
    });
    await alert.present();
  }

  add(){
    if(this.no1 == null || this.no2 == null){
      this.presentAlert();
    }else{
      this.result = parseInt(this.no1) + parseInt(this.no2);
    }
    
  }
    subtract(){
    this.result = parseInt(this.no1) - parseInt(this.no2);
  }
    multiply(){
    this.result = parseInt(this.no1) * parseInt(this.no2);
  }
    devide(){
    this.result = parseInt(this.no1) / parseInt(this.no2);
  }

}
