import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pols:Array<number>=[ ]

  constructor() { }

  ngOnInit(): void {
  }
  createPol(){
    this.pols.push(1);
  }

}
