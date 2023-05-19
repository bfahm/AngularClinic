import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CLINICS_ROUTE } from 'src/app/app-routing.module';
import { Clinic } from '../../../models/clinic.model';
import { ClinicsService } from '../../../services/clinics.service';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html'
})
export class AddClinicComponent {
  
  newClinicName: string = "";
  newClinicAddress: string = "";

  constructor(private router: Router, private clinicsService: ClinicsService) {}

  addClinic(name: string, address: string): void {
    const id = this.clinicsService.generateId();
    const newClinic = new Clinic(id, name, address, []);
    this.clinicsService.addClinic(newClinic);
    
    this.router.navigate([`/${CLINICS_ROUTE}`]);
  }

}
