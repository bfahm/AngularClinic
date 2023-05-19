import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DOCTORS_ROUTE } from 'src/app/app-routing.module';
import { Doctor } from '../doctor.model';
import { DoctorsService } from '../doctors.service';
import { ClinicsService } from 'src/app/clinics/clinics.service';
import { Clinic } from 'src/app/clinics/clinic.model';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
})
export class AddDoctorComponent {
  
  newDoctorName: string = "test";
  clinics: Clinic[] = [];
  selectedClinicId: number | null = null;

  constructor(private router: Router, 
    private doctorsService: DoctorsService, 
    private clinicsService: ClinicsService) 
    {}

  ngOnInit() {
    this.clinics = this.clinicsService.clinics;
  }  

  addDoctor(name: string): void {
    const id = this.doctorsService.generateId();
    const newDoctor = new Doctor(id, name);

    this.doctorsService.addDoctor(newDoctor);
    
    if(this.selectedClinicId){
      const selectedClinic = this.clinicsService.getById(this.selectedClinicId);
      if(selectedClinic){
        selectedClinic?.assignDoctor(newDoctor);
        newDoctor.assignedClinic = selectedClinic;
      }
    }
    
    this.router.navigate([`/${DOCTORS_ROUTE}`]);
  }

}
