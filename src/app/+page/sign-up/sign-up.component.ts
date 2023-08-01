import { Component } from '@angular/core';
import { UserService } from 'src/app/+Service/user.service';
import { Applictionuser } from 'src/app/+models/applictionUser';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  checkbox: boolean = false;
  constructor(public service: UserService) {}
  user = new Applictionuser();
  chek(){
    if (this.user.password==this.user.confirmPassword) {
      this.checkbox==true;
    }
  }
}
