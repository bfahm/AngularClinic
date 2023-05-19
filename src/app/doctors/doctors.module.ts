import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsComponent } from './doctors.component';
import { FormsModule } from '@angular/forms';
import { DoctorsService } from './doctors.service';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

@NgModule({
  declarations: [
    DoctorsComponent,
    AddDoctorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DoctorsService],
  exports: [DoctorsComponent, AddDoctorComponent],
})
export class DoctorsModule { }
