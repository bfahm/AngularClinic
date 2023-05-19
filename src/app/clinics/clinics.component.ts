import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_CLINIC_ROUTE, DOCTORS_ROUTE, PATIENT_VIEW_ROUTE } from '../app-routing.module';
import { Clinic } from '../../models/clinic.model';
import { ClinicsService } from '../../services/clinics.service';
import { UserService } from '../../services/user.service';
import { UserType } from '../../models/user.model';
import { PatientsService } from '../../services/patients.service';
import { Doctor } from '../../models/doctor.model';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
})
export class ClinicsComponent implements OnInit {
  clinics: Clinic[] = [];
  isAdmin = false;
  isPatient = false;

  constructor(private router: Router, private clinicsService: ClinicsService, private userService: UserService, private patientsService: PatientsService) {}

  ngOnInit() {
    this.clinics = this.clinicsService.clinics;
    
    this.userService.currentUserType.subscribe(v => 
    {
      this.isAdmin = v == UserType.Admin;
      this.isPatient = v == UserType.Patient;
    });
  }

  goToAddClinic(){
    this.router.navigate([`/${ADD_CLINIC_ROUTE}`]);
  }

  reserveDoctor(doctor: Doctor){
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const patient = this.patientsService.getCurrentPatient();
    if(patient){
      this.patientsService.createAnAppointment(patient, doctor, tomorrow);
      this.router.navigate([`/${PATIENT_VIEW_ROUTE}`]);
    }
  }
}
