import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClinicComponent } from './clinics/add-clinic/add-clinic.component';
import { ClinicsComponent } from './clinics/clinics.component';

export const CLINICS_ROUTE = 'clinics';
export const ADD_CLINIC_ROUTE = 'add-clinic';

const routes: Routes = [
  { path: CLINICS_ROUTE, component: ClinicsComponent },
  { path: ADD_CLINIC_ROUTE, component: AddClinicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
