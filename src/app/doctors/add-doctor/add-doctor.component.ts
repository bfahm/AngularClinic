import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DOCTORS_ROUTE } from 'src/app/app-routing.module';
import { Doctor } from '../doctor.model';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
})
export class AddDoctorComponent {
  
  newDoctorName: string = "test";

  constructor(private router: Router, private doctorsService: DoctorsService) {}

  addDoctor(name: string): void {
    const id = this.doctorsService.generateId();
    const newDoctor = new Doctor(id, name);
    this.doctorsService.addDoctor(newDoctor);
    
    this.router.navigate([`/${DOCTORS_ROUTE}`]);
  }

}
