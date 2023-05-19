import { Clinic } from "../clinics/clinic.model";

export class Patient {
  id: number;
  name: string;
  username: string;
  password: string;

  constructor(id: number, name: string, username: string, password: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
  }
}