export class User {
  username: string;
  password: string;
  userType: UserType;

  constructor(username: string, password: string, userType: UserType) {
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