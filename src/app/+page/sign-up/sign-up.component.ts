import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/+Service/user.service';
import { Applictionuser } from 'src/app/+models/applictionUser';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  checkbox: boolean = false;
  constructor(public service: UserService,public router:Router) {}
  next(){
    this.router.navigate(['/security']);
  }
}
