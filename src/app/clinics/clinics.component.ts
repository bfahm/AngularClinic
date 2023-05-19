import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_CLINIC_ROUTE, DOCTORS_ROUTE } from '../app-routing.module';
import { Clinic } from '../models/clinic.model';
import { ClinicsService } from './clinics.service';
import { UserService } from '../user.service';
import { UserType } from '../models/user.model';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
})
export class ClinicsComponent implements OnInit {
  clinics: Clinic[] = [];
  isAdmin = false;

  constructor(private router: Router, private clinicsService: ClinicsService, private userService: UserService) {}

  ngOnInit() {
    this.clinics = this.clinicsService.clinics;
    
    this.userService.currentUserType.subscribe(v => 
    {
      this.isAdmin = v == UserType.Admin;
    });
  }

  goToAddClinic(){
    this.router.navigate([`/${ADD_CLINIC_ROUTE}`]);
  }
}
