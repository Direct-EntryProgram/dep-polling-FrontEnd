import { Component, OnInit } from '@angular/core';
import {Poll} from "../dto/poll";
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  static number=0;
  polls:Array<Poll>=[ ]

  constructor(private userService:UserService,private routerService:Router) { }

  ngOnInit(): void {
    if (!this.userService.getPrincipal()){
      this.routerService.navigateByUrl('login');
    }
  }
  createPoll(title:string){
    this.polls.push(new Poll(DashboardComponent.number++,title,this.userService.getPrincipal()));
  }
  navigate(id:number){
    this.routerService.navigate(['pols',id]);
  }

}
