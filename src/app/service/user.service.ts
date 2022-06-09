import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly users=['dulanga','sasitha','thanura','loshitha','thilina','sasmitha','lahiru',
    'chamal','sajith','kawmal','shakya','nuwangi','bhashitha','hashadhi'];
  principal:string| null=null;

  constructor() { }

  login(name:string):boolean{
    if( this.users.includes(name)){
      this.principal=name;
      return true;
    }else {
      this.principal=null;
      return false;
    }

    }
    getPrincipal():string|null{
    return this.principal;
    }
  }


