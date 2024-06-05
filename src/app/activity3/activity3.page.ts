import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-activity3',
  templateUrl: './activity3.page.html',
  styleUrls: ['./activity3.page.scss'],
})
export class Activity3Page implements OnInit {

  constructor( private actionSheetCtrl : ActionSheetController) { }

  no1 = "";
  no2 = "";
  result = 0;

  ngOnInit() {
  }

  add(){
    this.result = parseInt( this.no1 ) + parseInt(this.no2);
  }

  subtract(){
    this.result = parseInt( this.no1 ) - parseInt(this.no2);
  }

  multiply(){
    this.result = parseInt( this.no1 ) * parseInt(this.no2);
  }

  divide(){
    this.result = parseInt( this.no1 ) / parseInt(this.no2);
  }

  async open_action_sheet(){
    const open_operation = await this.actionSheetCtrl.create({
      header: 'Operation',
      subHeader: 'Choose Operation below',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          data:{
            action: 'cancel'
          }
        },
        {
          text: 'Add',
          role: 'add',
          data:{
            action: 'add'
          }
        },
        {
          text: 'Subtract',
          role: 'subtract',
          data:{
            action: 'subtract'
          }
        },
        {
          text: 'Multiply',
          role: 'multiply',
          data:{
            action: 'multiply'
          }
        },
        {
          text: 'Divide',
          role: 'divide',
          data:{
            action: 'divide'
          }
        }
      ]
    })
    open_operation.present();

    const result = await open_operation.onDidDismiss();
    console.log(result);
    
    if (result.data.action == "add"){
      this.result = parseInt( this.no1 ) + parseInt(this.no2);
    }

    if (result.data.action == "subtract"){
      this.result = parseInt( this.no1 ) - parseInt(this.no2);
    }

    if (result.data.action == "multiply"){
      this.result = parseInt( this.no1 ) * parseInt(this.no2);
    }

    if (result.data.action == "divide"){
      this.result = parseInt( this.no1 ) / parseInt(this.no2);
    }

  }
}
