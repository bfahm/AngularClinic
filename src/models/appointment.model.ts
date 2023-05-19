import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export class Appointment {
    patient: Patient;
    doctor: Doctor;
    date: Date;

    constructor(patient: Patient, doctor: Doctor, date: Date) {
      this.patient = patient;
      this.doctor = doctor;
      this.date = date;
    }
  }