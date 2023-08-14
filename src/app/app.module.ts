import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './+page/home/home.component';
import { AboutComponent } from './+page/about/about.component';
import { SignInComponent } from './+page/sign-in/sign-in.component';
import { SignUpComponent } from './+page/sign-up/sign-up.component';
import { NotfoundComponent } from './+page/notfound/notfound.component';
import { CalculatorComponent } from './+page/cal/calculator.component';
import { FormsModule } from '@angular/forms';
import { SecurityComponent } from './+page/security/security.component';
import { ProfileComponent } from './+page/profile/profile.component';
import { InformationComponent } from './+page/information/information.component';
import { InformationsComponent } from './+page/informations/informations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignInComponent,
    SignUpComponent,
    NotfoundComponent,
    CalculatorComponent,
    SecurityComponent,
    ProfileComponent,
    InformationComponent,
    InformationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
