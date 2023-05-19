import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DOCTORS_ROUTE, PATIENTS_ROUTE } from 'src/app/app-routing.module';
import { Patient } from '../patient.model';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
})
export class RegisterPatientComponent {
  
  @Input()
  newPatientName: string = "test";
  @Input()
  newPatientUsername: string = "test";
  @Input()
  newPatientPassword: string = "test";
  
  constructor(private router: Router, 
    private patientsService: PatientsService) 
    {}

  addPatient(): void {
    const id = this.patientsService.generateId();
    const newPatient = new Patient(id, this.newPatientName, this.newPatientUsername, this.newPatientPassword);

    this.patientsService.addPatient(newPatient);
    
    this.router.navigate([`/${PATIENTS_ROUTE}`]);
  }

}
