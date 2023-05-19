import { Inject, Injectable, forwardRef } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { ClinicsService } from './clinics.service';
import { UserService } from './user.service';
import { User, UserType } from 'src/models/user.model';

// Demo data for testing
export const demoDoctor1 = new Doctor(1, 'Dr. Smith', 'smith', 'Test@123');
export const demoDoctor2 = new Doctor(2, 'Dr. Patel', 'patel', 'Test@123');
export const demoDoctor3 = new Doctor(3, 'Dr. Lee', 'lee', 'Test@123');

@Injectable({
  providedIn: 'root'
})

export class DoctorsService {
  doctors: Doctor[] = [
    demoDoctor1,
    demoDoctor2,
    demoDoctor3
  ];

  constructor(private clinicsService: ClinicsService, private userService: UserService) 
  {
    this.doctors.forEach(d => d.assignedClinic = this.clinicsService.getDoctorClinc(d));
  }

  generateId(): number{
    const ids = this.doctors.flatMap(d => d.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  addDoctor(doctor: Doctor){
    this.doctors.push(doctor);
    const user = new User(doctor.id, doctor.username, doctor.password, UserType.Doctor)
    this.userService.addUser(user);
  }

  getById(id: number): Doctor | undefined {
    return this.doctors.find(d => d.id === id);
  }
}
