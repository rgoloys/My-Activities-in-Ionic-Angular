import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-route1',
  templateUrl: './route1.page.html',
  styleUrls: ['./route1.page.scss'],
})

export class Route1Page implements OnInit {

  name: any;
  age:any;
  constructor(private router: Router, private activateroute: ActivatedRoute, private alertController: AlertController) { }

  next(name: any){
    if(name == null){
      this.presentAlert();
    }else{
      this.router.navigate(['2/' + name])
    }
  }
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

  /*
  route(page: any){
    if(page == 2){
      this.router.navigate(['/route2'])
    }else if(page == 3){
      this.router.navigate(['/route3'])
    }else{
      this.presentAlert();
    }
  }
  */

}
