import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './+page/home/home.component';
import { AboutComponent } from './+page/about/about.component';
import { SignInComponent } from './+page/sign-in/sign-in.component';
import { SignUpComponent } from './+page/sign-up/sign-up.component';
import { NotfoundComponent } from './+page/notfound/notfound.component';
import { CalculatorComponent } from './+page/cal/calculator.component';
import { combineLatest } from 'rxjs';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'not-found',component:NotfoundComponent},
  {path:'Calculator',component:CalculatorComponent},
  // اگه کاربر هیچی رو سرچ کنه
  // و استسنا pathMatch رو میزنیم و مقدار ان را full می کنیم
  {path:'',redirectTo:'/home',pathMatch:'full'},
  // اگه کاربر هرچی غیر از این هارا زد
  {path:'**',redirectTo:'/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
