import { Component } from "@angular/core";
import {User} from "./shared/user/user";

@Component({
  selector: "my-app",
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class AppComponent {
  user: User;
  email = "nativescriptrocks@telerik.com";
  isLoggingIn = true;

  constructor(){
    this.user = new User();
  }

  submit(){
    alert("Hello from Email:" + this.user.email);
  }

  toggleDisplay(){
    this.isLoggingIn = !this.isLoggingIn;
  }
}