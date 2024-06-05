import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-route4',
  templateUrl: './route4.page.html',
  styleUrls: ['./route4.page.scss'],
})
export class Route4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  return(){
    this.router.navigate(['2/:name'])
  }
}
