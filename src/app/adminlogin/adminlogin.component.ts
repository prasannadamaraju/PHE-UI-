import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  @Input() enabled = true;

  isLogin = 'hide';
  message;
  constructor(private route: Router) { }

  login(username, password) {
    if ((username.value === '') || (password.value === '')) {
      this.isLogin = '';
      this.message = 'Please enter the username and password.';
    } else if ((username.value === 'admin@phe.com' && password.value === 'adminphe')) {
        this.isLogin = 'hide';
        console.log('logged in successfully');
        this.route.navigate(['app-admin-homepage']);
    }
  }
}
