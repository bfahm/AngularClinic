import { Injectable } from '@angular/core';
import { User, UserType } from './models/user.model';
import { BehaviorSubject } from 'rxjs';

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

  currentUserType = new BehaviorSubject<UserType>(UserType.Unauthenticated);
  currentUsername = new BehaviorSubject<string>("");
  

  login(userName: string, password: string): boolean{
    const existingUser = this.users.find(u => u.username == userName && u.password == password);
    if(!existingUser){
      return false;
    }

    this.currentUsername.next(existingUser.username);
    this.currentUserType.next(existingUser.userType);

    return true;
  }

  static isAuthenticated(currentUserType: UserType): boolean{
    return currentUserType != UserType.Unauthenticated;
  }


}
