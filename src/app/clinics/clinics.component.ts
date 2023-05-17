import { Component, OnInit } from '@angular/core';
import { Clinic } from './clinic.model';
import { ClinicsService } from './clinics.service';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css']
})
export class ClinicsComponent implements OnInit {
  clinics: Clinic[] = [];

  constructor(private clinicsService: ClinicsService) {}

  ngOnInit() {
    this.clinics = this.clinicsService.clinics;
    console.log(this.clinics);
  }
}
