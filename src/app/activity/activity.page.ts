import { Component, OnInit } from '@angular/core';
import { expand } from 'rxjs';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  constructor() { }
 
  expand ="round";

  size ="small";
  color ="block";
  ngOnInit() {
  }

    expand_full(){  
        this.expand = "full"; 
    }
    expand_block(){
      this.expand="block";
    }
    expand_shape(){
      this.expand="round";
    }


    size_small(){
      this.size="small";
    }
    size_large(){
      this.size="large";
    }
    size_default(){
      this.size="default";
    }
    
    color_danger(){
      this.color="danger";
    }
    color_secondary(){
      this.color="secondary";
    } 
    color_tertiary(){
      this.color="tertiary";
    }
    color_primary(){
      this.color="primary";
    }
    color_warning(){
      this.color="warning";
    }
    color_light(){
      this.color="light";
    }
    expand_clear(){
      this.expand="clear";
    }
    expand_outline(){
      this.expand="outline";
    }
    expand_solid(){
      this.expand="solid";
    }

    


  


}
