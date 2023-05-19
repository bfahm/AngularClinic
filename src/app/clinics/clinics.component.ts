import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_CLINIC_ROUTE, DOCTORS_ROUTE } from '../app-routing.module';
import { Clinic } from './clinic.model';
import { ClinicsService } from './clinics.service';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {
  clinics: Clinic[] = [];

  constructor(private router: Router, private clinicsService: ClinicsService) {}

  ngOnInit() {
    this.clinics = this.clinicsService.clinics;
    console.log(this.clinics);
  }

  goToAddClinic(){
    this.router.navigate([`/${ADD_CLINIC_ROUTE}`]);
  }
  
  goToDoctors(){
    this.router.navigate([`/${DOCTORS_ROUTE}`]);
  }
}
