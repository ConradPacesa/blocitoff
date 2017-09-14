import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

import { User } from './user';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})

export class SignInComponent {
  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router) { }

  onSubmit() {
    this.authService.signIn(this.model.email, this.model.password)
      .subscribe(
        data => {
          this.router.navigate(['']);
        }
      )
  }

}
