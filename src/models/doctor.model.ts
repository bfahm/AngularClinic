import { Clinic } from "./clinic.model";

export class Doctor {
  id: number;
  name: string;
  username: string;
  password: string;
  assignedClinic: Clinic | undefined = undefined;

  constructor(id: number, name: string, username: string, password: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
  }
}