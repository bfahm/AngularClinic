import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Appointment } from '../../../models/appointment.model';
import { Patient } from '../../../models/patient.model';
import { PatientsService } from '../../../services/patients.service';

@Component({
  selector: 'app-patient-view',
  templateUrl: './patient-view.component.html'
})
export class PatientViewComponent {
  appointments: Appointment[] = [];
  patient: Patient | undefined = undefined;
  
  constructor(private readonly userService: UserService, 
    private readonly patientsService: PatientsService){}
  
  ngOnInit(): void {
    const currentUserId = this.userService.currentUserId.value;
    const currentPatient = this.patientsService.getById(currentUserId);

    if(currentPatient){
      this.patient = currentPatient;
      this.appointments = this.patientsService.getPatientAppointments(currentPatient);
    }
  }
}
