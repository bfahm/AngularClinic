import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Doctor } from '../models/doctor.model';
import { Appointment } from '../models/appointment.model';
import { demoDoctor1, demoDoctor2, demoDoctor3 } from '../doctors/doctors.service';
import { UserService } from '../user.service';

export const demoPatient = new Patient(1, 'Jack', 'jack', 'Test@123');
export const demoPatient2 = new Patient(2, 'Jack', 'jack2', 'Test@123');

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients: Patient[] = [
    demoPatient,
    demoPatient2,
  ];

  appointments: Appointment[] = [
    new Appointment(demoPatient, demoDoctor3, new Date()),
    new Appointment(demoPatient, demoDoctor2, new Date()),
    new Appointment(demoPatient2, demoDoctor1, new Date()),
    new Appointment(demoPatient2, demoDoctor3, new Date()),
  ];

  constructor(private readonly userService: UserService) { }

  generateId(): number{
    const ids = this.patients.flatMap(d => d.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  addPatient(patient: Patient){
    this.patients.push(patient);
  }

  getById(id: number): Patient | undefined {
    return this.patients.find(d => d.id == id);
  }

  getCurrentPatient(): Patient | undefined {
    return this.patients.find(d => d.id == this.userService.currentUserId.value);
  }

  createAnAppointment(patient: Patient, doctor: Doctor, date: Date) {
    this.appointments.push(new Appointment(patient, doctor, date));
  }

  getPatientAppointments(patient: Patient) : Appointment[]{
    return this.appointments.filter(a => a.patient.id == patient.id).sort((a, b) => {
      return b.date.getSeconds() - a.date.getSeconds();
    });
  }

  getDoctorAppointments(doctor: Doctor) : Appointment[]{
    return this.appointments.filter(a => a.doctor.id == doctor.id).sort((a, b) => {
      return b.date.getSeconds() - a.date.getSeconds();
    });
  }
}
