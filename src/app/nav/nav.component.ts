import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  currentUsername: string = "";

  ngOnInit(): void {
    this.currentUsername = this.userService.currentUsername;
  }

  constructor(private readonly userService: UserService){
    
  }
}
