import { Injectable } from '@angular/core';
import { Doctor } from './doctor.model';

// Demo data for testing
export const demoDoctor1 = new Doctor(1, 'Dr. Smith');
export const demoDoctor2 = new Doctor(2, 'Dr. Patel');
export const demoDoctor3 = new Doctor(3, 'Dr. Lee');

@Injectable({
  providedIn: 'root'
})

export class DoctorsService {
  doctors: Doctor[] = [
    demoDoctor1,
    demoDoctor2,
    demoDoctor3
];
  constructor() { }

  generateId(): number{
    const ids = this.doctors.flatMap(d => d.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  addDoctor(doctor: Doctor){
    this.doctors.push(doctor);
  }
}
