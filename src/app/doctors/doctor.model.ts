import { Clinic } from "../clinics/clinic.model";

export class Doctor {
  id: number;
  name: string;
  assignedClinic: Clinic | null = null;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}