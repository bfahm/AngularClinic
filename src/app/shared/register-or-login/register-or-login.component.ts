import { Component } from '@angular/core';

@Component({
  selector: 'app-register-or-login',
  templateUrl: './register-or-login.component.html'
})
export class RegisterOrLoginComponent {
  isRegister = false;
  toggleRegister(isRegister: boolean){
    this.isRegister = isRegister;
  }
}
