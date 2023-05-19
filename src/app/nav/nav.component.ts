import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  currentUsername: string = "";
  isAuthenticated = false;

  ngOnInit(): void {
    this.userService.currentUsername.subscribe(v => {
      this.currentUsername = v;
    });

    this.userService.currentUserType.subscribe(v => {
      this.isAuthenticated = UserService.isAuthenticated(v);
    });
  }

  constructor(private readonly userService: UserService){
    
  }
}
