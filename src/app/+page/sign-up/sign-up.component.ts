import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  Firstname:string='';
  Lastname:string='';
  Email:string='';
  NationalCode:string='';
  Gender:string='';
  Military:string='';
  Password:string='';
  ConfirmPassword:string='';
  Iaccept:boolean=false;
}
