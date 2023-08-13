import { Injectable } from '@angular/core';
import { Applictionuser } from '../+models/applictionUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username:string='admin';
  password:string='admin';
  Message:boolean=false;
  constructor() {}
  user=new Applictionuser;
  signup(){
    let users:Applictionuser[]=JSON.parse(localStorage.getItem('users')?? '[]');
    users.push(this.user);
    localStorage.setItem('users',JSON.stringify(users));
  }
  admin(username:string,password:string){
    if (username==this.username && password==this.password) {
      this.Message=true;
    }
  }
  signin(username:string,password:string){
    let users:Applictionuser[]=JSON.parse(localStorage.getItem('users')?? '[]');
    let result=users.filter(m=> m.username==username && m.password==password);
    if (result.length==0) {
      return false;
    }
    return true;
  }

}
