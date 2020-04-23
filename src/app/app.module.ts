import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSideComponent } from './login-side/login-side.component';
import { FooterDeLoginComponent } from './footer-de-login/footer-de-login.component';
import { HRResponsableSideComponent } from './hr-responsable-side/hr-responsable-side.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OverreviewComponent } from './hr-responsable-side/overreview/overreview.component';
import { AbsenceEtCongeComponent } from './hr-responsable-side/absence-et-conge/absence-et-conge.component';
import { DocumentAdministrativeComponent } from './hr-responsable-side/document-administrative/document-administrative.component';
import { GestionPersonnelComponent } from './hr-responsable-side/gestion-personnel/gestion-personnel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginSideComponent,
    FooterDeLoginComponent,
    HRResponsableSideComponent,
    TopBarComponent,
    ForgotPasswordComponent,
    OverreviewComponent,
    AbsenceEtCongeComponent,
    DocumentAdministrativeComponent,
    GestionPersonnelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatBadgeModule
    , MatButtonModule,
    MatTreeModule,
    MatProgressBarModule,
    MatListModule,
    MatTabsModule
, MatDividerModule
,MatTooltipModule,
MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
