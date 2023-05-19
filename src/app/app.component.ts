import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { UserType } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Angular Clinic';
  isAuthenticated = false;

  constructor(private readonly userService: UserService) {
  }
  ngOnInit(): void {

    this.userService.currentUserType.subscribe(v => {
      this.isAuthenticated = UserService.isAuthenticated(v);
    });
  }
}
