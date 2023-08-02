import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/+Service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username:string='';
  password:string='';
  message:string='';
  constructor(private users:UserService,private router:Router){}
  next(){
    this.router.navigate(['/signup']);
  }
  signin(){
    var isok=this.users.signin(this.username,this.password);
    if (isok==false) {
      this.message='username/password is invalid';
    }
    else{
      this.message='Welcome';
    }
  }
}
