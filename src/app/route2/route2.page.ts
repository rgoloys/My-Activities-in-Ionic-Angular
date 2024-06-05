import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-route2',
  templateUrl: './route2.page.html',
  styleUrls: ['./route2.page.scss'],
})
export class Route2Page implements OnInit {

  name: any;
  constructor(private alertController: AlertController, private activateroute: ActivatedRoute, private router: Router) {
    this.name = this.activateroute.snapshot.paramMap.get('name');
   }

  age:any;

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Please insert your age !',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
  next(age:any){
    if(age >=18){
      this.router.navigate(['3/' + age])

    }else if(age <= 17){
      this.router.navigate(['4/' + age])
    }else{
      this.presentAlert();
    }
  }
  return(){
    this.router.navigate(['route1'])
  }

  ngOnInit() {
  }




}
