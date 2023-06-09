import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserType } from '../../../models/user.model';
import { CLINICS_ROUTE, DOCTORS_ROUTE, DOCTOR_VIEW_ROUTE, PATIENTS_ROUTE, PATIENT_VIEW_ROUTE } from '../../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  wrongPwd: boolean = false;

  
  constructor(private readonly userService: UserService, private router: Router) {}

  login(){
    const result = this.userService.login(this.username, this.password);
    if(!result){
      this.wrongPwd = true;
      return;
    }

    this.userService.currentUserType.subscribe(v => 
    {
      switch(v){
        case UserType.Admin:
          this.router.navigate([`/${CLINICS_ROUTE}`]);
          break;
          case UserType.Patient:
            this.router.navigate([`/${PATIENT_VIEW_ROUTE}`]);
            break;
          case UserType.Doctor:
            this.router.navigate([`/${DOCTOR_VIEW_ROUTE}`]);
            break;
      }
    });
  }
}
