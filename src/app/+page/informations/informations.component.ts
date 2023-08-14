import { Component } from '@angular/core';
import { UserService } from 'src/app/+Service/user.service';
import { Applictionuser } from 'src/app/+models/applictionUser';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent {
  constructor(public users:UserService){}
  remove(user:Applictionuser){
    this.users.remove(user)
  }
}
