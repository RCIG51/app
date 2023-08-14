import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/+Service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  constructor(private users: UserService, private router: Router) {}
  next() {
    this.router.navigate(['/signup']);
  }
  admin(){
    this.users.admin(this.username,this.password);
    if (this.users.Message==true) {
    this.router.navigate(['/informations']);
    alert('welcome admin');
    }
    else{
    alert('you are not admin');
   }
  }
  signin(){
    var isok = this.users.signin(this.username, this.password);
    if (isok == false) {
      alert('username/password is invalid');
    } else if (isok == true) {
      this.router.navigate(['/profile']);
      alert('Welcome');
    }
  }
}
