import { Component } from '@angular/core';
import { UserService } from 'src/app/+Service/user.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  constructor(public service:UserService){}
  confirmPassword:string='';
  password:string='';
  username:string='';
  email:string='';
  iaccept:boolean=false;
  // save(){
  //   this.service.save(this.email,this.password,this.confirmPassword,this.username,this.iaccept);
  // }
}
