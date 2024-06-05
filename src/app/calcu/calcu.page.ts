import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.page.html',
  styleUrls: ['./calcu.page.scss'],
})
export class CalcuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  value='0';
  firstValue='0';
  halfVal='2';
  sound:any;


  operator='*';
  readyForNewInput=true;


  playAudio(input:any){
    if(input=='1'){
      let audio = new Audio();
      audio.src = "/assets/sfx/one.mp3";
      audio.load();
      audio.play();
    }
    if(input=='2'){
      let audio = new Audio();
      audio.src = "/assets/sfx/two.mp3";
      audio.load();
      audio.play();
    }
    if(input=='3'){
      let audio = new Audio();
      audio.src = "/assets/sfx/three.mp3";
      audio.load();
      audio.play();
    }
    if(input=='4'){
      let audio = new Audio();
      audio.src = "/assets/sfx/four.mp3";
      audio.load();
      audio.play();
    }
    if(input=='5'){
      let audio = new Audio();
      audio.src = "/assets/sfx/five.mp3";
      audio.load();
      audio.play();
    }
    if(input=='6'){
      let audio = new Audio();
      audio.src = "/assets/sfx/six.mp3";
      audio.load();
      audio.play();
    }
    if(input=='7'){
      let audio = new Audio();
      audio.src = "/assets/sfx/seven.mp3";
      audio.load();
      audio.play();
    }
    if(input=='8'){
      let audio = new Audio();
      audio.src = "/assets/sfx/eight.mp3";
      audio.load();
      audio.play();
    }
    if(input=='9'){
      let audio = new Audio();
      audio.src = "/assets/sfx/nine.mp3";
      audio.load();
      audio.play();
    }
    if(input=='0'){
      let audio = new Audio();
      audio.src = "/assets/sfx/zero.mp3";
      audio.load();
      audio.play();
    }


    if(input=='.'){
      let audio = new Audio();
      audio.src = "/assets/sfx/period.mp3";
      audio.load();
      audio.play();
    }
    if(input=='D'){
      let audio = new Audio();
      audio.src = "/assets/sfx/delete.mp3";
      audio.load();
      audio.play();
    }
    if(input=='='){
      let audio = new Audio();
      audio.src = "/assets/sfx/equals.mp3";
      audio.load();
      audio.play();
    }
    if(input=='+'){
      let audio = new Audio();
      audio.src = "/assets/sfx/plus.mp3";
      audio.load();
      audio.play();
    }
    if(input=='-'){
      let audio = new Audio();
      audio.src = "/assets/sfx/minus.mp3";
      audio.load();
      audio.play();
    }
    if(input=='*'){
      let audio = new Audio();
      audio.src = "/assets/sfx/multiply.mp3";
      audio.load();
      audio.play();
    }
    if(input=='/'){
      let audio = new Audio();
      audio.src = "/assets/sfx/divide.mp3";
      audio.load();
      audio.play();
    }
    if(input=='%'){
      let audio = new Audio();
      audio.src = "/assets/sfx/percent.mp3";
      audio.load();
      audio.play();
    }
    if(input=='H'){
      let audio = new Audio();
      audio.src = "/assets/sfx/half.mp3";
      audio.load();
      audio.play();
    }
    if(input=='C'){
      let audio = new Audio();
      audio.src = "/assets/sfx/clear.mp3";
      audio.load();
      audio.play();
    }
    
  }
  

  onButtonPress(num: any){
    if(Number.isInteger(num)){
        if(this.readyForNewInput){
          this.value= ''+num;
        }else {
          this.value +=''+num; 
        }
      this.readyForNewInput= false;
    }
    else if (num=='H'){
      this.value =''+ (parseFloat(this.value) / parseFloat(this.halfVal));
      this.readyForNewInput = true;;
    }
    else if (num=='D'){
    length = this.value.length;
      this.value = this.value.substring(0,(length-1));
      this.readyForNewInput = true;;
    }
    else if(num=='C'){
      this.value ='0';
      this.readyForNewInput= true;
    }
    else if(num=='='){
      if(this.operator=='/'){
        this.value = ''+ (parseFloat(this.value) / parseFloat(this.firstValue));
        this.readyForNewInput = true;
      }
      else if(this.operator=='*'){
        this.value = ''+ (parseFloat(this.value) * parseFloat(this.firstValue));
        this.readyForNewInput = true;
      }
      else if(this.operator=='-'){
        this.value = ''+ (parseFloat(this.firstValue) - parseFloat(this.value));
        this.readyForNewInput = true;
      }
      else if(this.operator=='+'){
        this.value = ''+ (parseFloat(this.value) + parseFloat(this.firstValue));
        this.readyForNewInput = true;
      }
      else if(this.operator=='%'){
        this.value = ''+ (parseFloat(this.firstValue) % parseFloat(this.value));
        this.readyForNewInput = true;
      }

    }
    
    else if(num=='.'){
        this.value = this.value + '.';
    }
    else{
      this.readyForNewInput = true;
      this.firstValue = this.value;
      this.operator = num;
    }
  }

  
}
