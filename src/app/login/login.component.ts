import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = "";
  invalid = false;
  @ViewChild("txtName")
  txtNameWrapper !:ElementRef<HTMLInputElement>;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
  }

  enter(): void {
    if (this.userService.login(this.name)) {
      this.invalid = true;
    } else {
      this.invalid = false;
      this.txtNameWrapper.nativeElement.select();
      this.txtNameWrapper.nativeElement.focus();
    }
  }
}
