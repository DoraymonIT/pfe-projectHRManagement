import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSideComponent } from './login-side/login-side.component';
import { FooterDeLoginComponent } from './footer-de-login/footer-de-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSideComponent,
    FooterDeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
