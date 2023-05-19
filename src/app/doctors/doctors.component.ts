import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADD_DOCTORS_ROUTE } from '../app-routing.module';
import { DoctorsService } from './doctors.service';
import { Doctor } from './doctor.model';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private router: Router, private doctorsService: DoctorsService) {}

  ngOnInit() {
    this.doctors = this.doctorsService.doctors;
    console.log(this.doctors);
  }

  goToAddDoctor(){
    this.router.navigate([`/${ADD_DOCTORS_ROUTE}`]);
  }
}
