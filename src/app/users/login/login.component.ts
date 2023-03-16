import { Component } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {

  constructor(
    private router: Router,
   ) {}
  
  user_email: string = '';
  user_password: string = '';
  remember_me: boolean = false;

  show_remember: boolean = false;
  show_remember_confirmation: boolean = false;
  remember_user_email: string = '';

  show_register: boolean = false;
  show_register_confirmation: boolean = false;
  register_user_email: string = '';
  register_user_password: string = '';


  login() {
   this.router.navigate(['home'])
  }
}
