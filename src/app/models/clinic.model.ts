import { Doctor } from "./doctor.model";

export class Clinic {
    id: number;
    name: string;
    address: string;
    doctors: Doctor[] = [];
    
    constructor(id: number, name: string, address: string, doctors: Doctor[]) {
      this.id = id;
      this.name = name;
      this.address = address;
      this.doctors = doctors;
    }

    assignDoctor(doctor: Doctor): void {
      this.doctors.push(doctor);
    }
  }