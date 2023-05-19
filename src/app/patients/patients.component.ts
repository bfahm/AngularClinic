import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REGISTER_PATIENT_ROUTE } from '../app-routing.module';
import { PatientsService } from './patients.service';
import { Patient } from './patient.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
})
export class PatientsComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private router: Router, private patientsService: PatientsService) {}

  ngOnInit() {
    this.patients = this.patientsService.patients;
    console.log(this.patients);
  }

  goToRegisterPatient(){
    this.router.navigate([`/${REGISTER_PATIENT_ROUTE}`]);
  }
}
