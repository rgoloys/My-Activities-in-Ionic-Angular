import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.page.html',
  styleUrls: ['./route3.page.scss'],
})
export class Route3Page implements OnInit {

  age:any;
  constructor(private router: Router, private activateroute: ActivatedRoute) { 
    this.age = this.activateroute.snapshot.paramMap.get('age');
  }

  ngOnInit() {
  }


  return(){
    this.router.navigate(['2/:name'])
  }
}
