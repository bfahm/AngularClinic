import { Clinic } from "./clinic.model";

export class Doctor {
  id: number;
  name: string;
  assignedClinic: Clinic | undefined = undefined;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}