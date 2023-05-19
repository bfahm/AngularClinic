import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './patients.component';
import { PatientsService } from '../../services/patients.service';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PatientsComponent,
    RegisterPatientComponent,
  ],
  providers: [PatientsService],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PatientsComponent,
    RegisterPatientComponent,]
})
export class PatientsModule { }
