import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

import { User } from './user';

declare var toastr: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})

export class SignUpComponent {
  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router) { }

  onSubmit(): void {
    this.authService.signUp(this.model)
      .then(
        data => {
          this.router.navigate(['sign-in']);
        },
        error => {
          console.log(error);
          toastr.warning('Please fill all fields');
        });
  }
}
