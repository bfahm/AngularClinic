import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClinicComponent } from './clinics/add-clinic/add-clinic.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AddDoctorComponent } from './doctors/add-doctor/add-doctor.component';
import { PatientsComponent } from './patients/patients.component';
import { RegisterPatientComponent } from './patients/register-patient/register-patient.component';
import { DoctorViewComponent } from './doctors/doctor-view/doctor-view.component';
import { PatientViewComponent } from './patients/patient-view/patient-view.component';
import { LoginComponent } from './shared/login/login.component';

export const CLINICS_ROUTE = 'clinics';
export const ADD_CLINIC_ROUTE = 'add-clinic';
export const DOCTORS_ROUTE = 'doctors';
export const ADD_DOCTORS_ROUTE = 'add-doctor';
export const PATIENTS_ROUTE = 'patients';
export const REGISTER_PATIENT_ROUTE = 'register-patient';
export const DOCTOR_VIEW_ROUTE = 'doctor-view';
export const PATIENT_VIEW_ROUTE = 'patient-view';
export const LOGIN_ROUTE = 'login';

const routes: Routes = [
  { path: CLINICS_ROUTE, component: ClinicsComponent },
  { path: ADD_CLINIC_ROUTE, component: AddClinicComponent },
  { path: DOCTORS_ROUTE, component: DoctorsComponent },
  { path: ADD_DOCTORS_ROUTE, component: AddDoctorComponent },
  { path: PATIENTS_ROUTE, component: PatientsComponent },
  { path: REGISTER_PATIENT_ROUTE, component: RegisterPatientComponent },
  { path: PATIENT_VIEW_ROUTE, component: PatientViewComponent },
  { path: DOCTOR_VIEW_ROUTE, component: DoctorViewComponent },
  { path: LOGIN_ROUTE, component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
