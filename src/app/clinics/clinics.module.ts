import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicsComponent } from './clinics.component';
import { ClinicsService } from './clinics.service';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClinicsComponent,
    AddClinicComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ClinicsService],
  exports: [ClinicsComponent],
})
export class ClinicsModule { }
