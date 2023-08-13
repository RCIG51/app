import { Component } from '@angular/core';
import { UserService } from 'src/app/+Service/user.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  constructor(public service: UserService){}
  signup(){
    this.service.signup();
  }
}
