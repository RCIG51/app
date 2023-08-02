import { Injectable } from '@angular/core';
import { Applictionuser } from '../+models/applictionUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}
  signup(user:Applictionuser){
    let users:Applictionuser[]=JSON.parse(localStorage.getItem('users')?? '[]');
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users));
  }
  signin(username:string,password:string){
    let users:Applictionuser[]=JSON.parse(localStorage.getItem('users')?? '[]');
    let result=users.filter(m=> m.username==username && password==password);
    if (result.length==0) {
      return false;
    }
    return true;
  }
  // save(email:string,password:string,confirmPassword:string,username:string,iaccept:boolean){
  //   this.user.email==email;
  //   this.user.password==password;
  //   this.user.confirmPassword==confirmPassword;
  //   this.user.username==username;
  //   this.user.iaccept==iaccept;
  // }
}
