import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicsComponent } from './clinics.component';
import { ClinicsService } from './clinics.service';

@NgModule({
  declarations: [
    ClinicsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ClinicsService],
  exports: [ClinicsComponent],
})
export class ClinicsModule { }
