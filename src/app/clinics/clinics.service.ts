import { Injectable } from '@angular/core';
import { demoDoctor1, demoDoctor2, demoDoctor3 } from '../doctors/doctor.model';
import { Clinic } from './clinic.model';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {
  clinics: Clinic[] = [
    new Clinic(1, 'My Clinic', '123 Main St', []),
    new Clinic(2, 'Your Clinic', '456 Maple Ave', []),
    new Clinic(3, 'Community Health Center', '789 Elm St', []),
    new Clinic(4, 'Wellness Center', '1010 Oak St', [demoDoctor1, demoDoctor2]),
    new Clinic(5, 'Urgent Care', '1111 Pine St', [demoDoctor3])
];
  constructor() { }

  generateId(): number{
    const ids = this.clinics.flatMap(c => c.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }

  addClinic(clinic: Clinic){
    this.clinics.push(clinic);
  }
}
