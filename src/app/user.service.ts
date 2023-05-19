import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  currentUserType: UserType = UserType.Admin;
  currentUsername: string = "testUser";
}

export enum UserType{
  Admin,
  Doctor,
  Patient,
}
