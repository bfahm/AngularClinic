import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { Doctor } from '../models/doctor.model';
import { Appointment } from '../models/appointment.model';

export const demoPatient = new Patient(1, 'Jack', 'jack', 'Test@123');

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients: Patient[] = [
    demoPatient,
  ];

  appointments: Appointment[] = [];

  constructor() { }

  generateId(): number{
    const ids = this.patients.flatMap(d => d.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  addPatient(patient: Patient){
    this.patients.push(patient);
  }

  getById(id: number): Patient | undefined {
    return this.patients.find(d => d.id === id);
  }

  createAnAppointment(patient: Patient, doctor: Doctor, date: Date) {
    this.appointments.push(new Appointment(patient, doctor, date));
  }

  getPatientAppointments(patient: Patient) {
    this.appointments.filter(a => a.patient.id == patient.id).sort((a, b) => {
      return b.date.getSeconds() - a.date.getSeconds();
    });
  }

  getDoctorAppointments(doctor: Doctor) {
    this.appointments.filter(a => a.doctor.id == doctor.id).sort((a, b) => {
      return b.date.getSeconds() - a.date.getSeconds();
    });
  }
}
