import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

export const demoPatient = new Patient(1, 'Jack', 'jack', 'Test@123');

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patients: Patient[] = [
    demoPatient,
  ];

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
}
