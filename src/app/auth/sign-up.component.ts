import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

import { User } from './user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})

export class SignUpComponent {
  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router) { }

  onSubmit() {
    this.authService.signUp(this.model)
      .subscribe(
        data => {
          this.router.navigate(['sign-in']);
        }
      )
  }
}
