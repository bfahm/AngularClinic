import { Injectable } from '@angular/core';
import { User, UserType } from './models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  users: User[] = [
    new User(1, "admin", "admin", UserType.Admin),
    new User(2, "testPatient", "Test@123", UserType.Patient),
    new User(3, "testDoctor", "Test@123", UserType.Doctor),
  ];

  constructor() { }

  currentUserType = new BehaviorSubject<UserType>(UserType.Unauthenticated);
  currentUsername = new BehaviorSubject<string>("");
  currentUserId = new BehaviorSubject<number>(-1);
  

  login(userName: string, password: string): boolean{
    const existingUser = this.users.find(u => u.username == userName && u.password == password);
    if(!existingUser){
      return false;
    }

    this.currentUsername.next(existingUser.username);
    this.currentUserType.next(existingUser.userType);
    this.currentUserType.next(existingUser.id);

    return true;
  }

  logout(){
    this.currentUserType.next(UserType.Unauthenticated);
    this.currentUsername.next("");
    this.currentUserId.next(-1);
  }

  static isAuthenticated(currentUserType: UserType): boolean{
    return currentUserType != UserType.Unauthenticated;
  }


}
