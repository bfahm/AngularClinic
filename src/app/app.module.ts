import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicsModule } from './clinics/clinics.module';
import { DoctorsModule } from './doctors/doctors.module';
import { PatientsModule } from './patients/patients.module';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { FormsModule } from '@angular/forms';
import { PatientViewComponent } from './patients/patient-view/patient-view.component';
import { DoctorViewComponent } from './doctors/doctor-view/doctor-view.component';
import { RegisterOrLoginComponent } from './shared/register-or-login/register-or-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PatientViewComponent,
    DoctorViewComponent,
    RegisterOrLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DoctorsModule,
    ClinicsModule,
    PatientsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
