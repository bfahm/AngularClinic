import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DOCTORS_ROUTE } from 'src/app/app-routing.module';
import { Doctor } from '../../../models/doctor.model';
import { DoctorsService } from '../../../services/doctors.service';
import { ClinicsService } from 'src/services/clinics.service';
import { Clinic } from 'src/models/clinic.model';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
})
export class AddDoctorComponent {
  
  newDoctorName: string = "";
  newDoctorUsername: string = "";
  newDoctorPassword: string = "";
  clinics: Clinic[] = [];
  selectedClinicId: number | null = null;

  constructor(private router: Router, 
    private doctorsService: DoctorsService, 
    private clinicsService: ClinicsService) 
    {}

  ngOnInit() {
    this.clinics = this.clinicsService.clinics;
  }  

  addDoctor(): void {
    const id = this.doctorsService.generateId();
    const newDoctor = new Doctor(id, this.newDoctorName, this.newDoctorUsername, this.newDoctorPassword);

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
