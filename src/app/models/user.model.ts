export class User {
  id: number;
  username: string;
  password: string;
  userType: UserType;

  constructor(id: number, username: string, password: string, userType: UserType) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.userType = userType;
  }
}

export enum UserType{
  Admin,
  Doctor,
  Patient,
  Unauthenticated
}