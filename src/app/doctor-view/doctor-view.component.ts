import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { UserService } from '../user.service';
import { DoctorsService } from '../doctors/doctors.service';
import { PatientsService } from '../patients/patients.service';
import { Doctor } from '../models/doctor.model';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html'
})
export class DoctorViewComponent implements OnInit {
  appointments: Appointment[] = [];
  doctor: Doctor | undefined = undefined;
  
  constructor(private readonly userService: UserService, 
    private readonly doctorsService: DoctorsService, 
    private readonly patientsService: PatientsService){}
  
  ngOnInit(): void {
    const currentUserId = this.userService.currentUserId.value;
    const currentDoctor = this.doctorsService.getById(currentUserId);
    if(currentDoctor){
      this.doctor = currentDoctor;
      this.appointments = this.patientsService.getDoctorAppointments(currentDoctor);
    }
  }
}
