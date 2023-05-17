export class Doctor {
    id: number;
    name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }

// Demo data for testing
export const demoDoctor1 = new Doctor(1, 'Dr. Smith');
export const demoDoctor2 = new Doctor(2, 'Dr. Patel');
export const demoDoctor3 = new Doctor(3, 'Dr. Lee');