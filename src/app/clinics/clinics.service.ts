import { Injectable } from '@angular/core';
import { Clinic } from './clinic.model';
import { DoctorsService, demoDoctor1, demoDoctor2, demoDoctor3 } from '../doctors/doctors.service';
import { Doctor } from '../doctors/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {
  clinics: Clinic[] = [
    new Clinic(1, 'My Clinic', '123 Main St', []),
    new Clinic(2, 'Your Clinic', '456 Maple Ave', []),
    new Clinic(3, 'Community Health Center', '789 Elm St', [demoDoctor1]),
    new Clinic(4, 'Wellness Center', '1010 Oak St', [demoDoctor2]),
    new Clinic(5, 'Urgent Care', '1111 Pine St', [demoDoctor3])
];
  constructor() { }

  generateId(): number{
    const ids = this.clinics.flatMap(c => c.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  addClinic(clinic: Clinic){
    this.clinics.push(clinic);
  }

  getById(id: number): Clinic | undefined {
    return this.clinics.find(c => c.id === id);
  }

  getByDoctorId(id: number): Clinic | undefined {
    return this.clinics.find(c => c.doctors.find(d => d.id == id) != null);
  }

  assignDoctorToClinic(clinicId: number, doctor: Doctor){
    var clinic = this.getById(clinicId);
    if(clinic){
      clinic.assignDoctor(doctor);
    }
  }

  getDoctorClinc(doctor: Doctor): Clinic | null {
    var clinic = this.getByDoctorId(doctor.id);
    if(!clinic){
      return null;
    }

    return clinic;
  }
}
