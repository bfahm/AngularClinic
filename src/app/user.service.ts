import { Injectable } from '@angular/core';
import { User, UserType } from './models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[] = [
    new User("admin", "admin", UserType.Admin),
    new User("testPatient", "Test@123", UserType.Patient),
    new User("testDoctor", "Test@123", UserType.Doctor),
  ];

  constructor() { }

  currentUserType: UserType = UserType.Admin;
  currentUsername: string = "testUser";
  

  login(userName: string, password: string): boolean{
    console.log(userName, password)
    console.log(this.users)
    const existingUser = this.users.find(u => u.username == userName && u.password == password);
    console.log(existingUser)
    if(!existingUser){
      return false;
    }

    this.currentUsername = existingUser.username;
    this.currentUserType = existingUser.userType;

    return true;
  }


}
