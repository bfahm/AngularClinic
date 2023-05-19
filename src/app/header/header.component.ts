import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserType } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit  {
  title: string = "";
  subTitle: string = "";

  ngOnInit(): void {
    this.userService.currentUserType.subscribe(v => 
    {
      switch(v){
        case UserType.Admin:
          this.setHeaderForAdmin();
          break;
        case UserType.Doctor:
          this.setHeaderForDoctor();
          break;
        case UserType.Patient:
          this.setHeaderForPatient();
          break;
      }
    });
  }

  constructor(private readonly userService: UserService){
    
  }

  private setHeaderForDoctor(){
    this.title = "Welcome back Doctor!";
    this.subTitle = "See information about your appointments below.."
  }

  private setHeaderForPatient(){
    this.title = "Welcome back Sir!";
    this.subTitle = "Start exploring our clinics and make an appointment now!"
  }

  private setHeaderForAdmin(){
    this.title = "Admin View";
    this.subTitle = "This view is only available for admin."
  }
}
