import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PATIENTS_ROUTE } from 'src/app/app-routing.module';
import { Patient } from '../../models/patient.model';
import { PatientsService } from '../patients.service';
import { User, UserType } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
})
export class RegisterPatientComponent {
  
  @Input()
  newPatientName: string = "";
  @Input()
  newPatientUsername: string = "";
  @Input()
  newPatientPassword: string = "";

  @Output() toggleRegister = new EventEmitter<boolean>(true);
  
  constructor(private router: Router, 
    private patientsService: PatientsService,  
    private userService: UserService, ) 
    {}

  addPatient(): void {
    const id = this.patientsService.generateId();
    const newPatient = new Patient(id, this.newPatientName, this.newPatientUsername, this.newPatientPassword);

    this.patientsService.addPatient(newPatient);
    
    if(this.userService.currentUserType.value == UserType.Unauthenticated){
      this.toggleRegister.emit(false);
      this.router.navigate([`/`]);
    }else{
      this.router.navigate([`/${PATIENTS_ROUTE}`]);
    }
  }

}
