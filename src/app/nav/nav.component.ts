import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserType } from '../models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  currentUsername: string = "";
  isAuthenticated = false;
  isAdmin = false;
  isPatient = false;

  ngOnInit(): void {
    this.userService.currentUsername.subscribe(v => {
      this.currentUsername = v;
    });

    this.userService.currentUserType.subscribe(v => {
      this.isAuthenticated = UserService.isAuthenticated(v);
    });

    this.userService.currentUserType.subscribe(v => {
      this.isAdmin = v == UserType.Admin;
      this.isPatient = v == UserType.Patient;
    });
  }

  constructor(private readonly userService: UserService){
    
  }

  handleLogout() {
    this.userService.logout();
  }
}
