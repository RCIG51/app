import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/+Service/user.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  constructor(public service: UserService ,private router:Router){}
  signup(){
    this.service.signup();
    alert('Successfully Registered');
    this.router.navigate(['/home']);
  }
}
