import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.page.html',
  styleUrls: ['./p2.page.scss'],
})
export class P2Page implements OnInit {

  grade:any;
  code:any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  data1: any;
  view_multiple_data(){
    let data1 = 'fname';
    let data2 = 'lname';
    let data3 = 'bdate';
    let data4 = 'gender';
    let data5 = 'studno';

    let navigationExtras: NavigationExtras = {
      state:{
        data: {
          data1: data1,
          data2: data2,
          data3: data3,
          data4: data4,
          data5: data5
        }
      }
    };
    this.router.navigate(['/multiple_details'], navigationExtras)
  }
  ngOnInit() {

    let navigation = this.router.getCurrentNavigation();
    if(navigation != null ){
      let state = navigation.extras.state;
      if(state != null){
        this.data1 = state['data'].data1;
        this.data1 = state['data'].data2;
        this.data1 = state['data'].data3;
        this.data1 = state['data'].data4;
        this.data1 = state['data'].data5;
      }
    }
  }
  
  add(grade:any, code:any){
    if(grade == null || code == null){
      grade = null;
      code = null;
    }else{
      return;
    }
  }
}
