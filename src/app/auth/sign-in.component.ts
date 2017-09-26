import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

import { User } from './user';
import 'rxjs/add/operator/map';

declare var toastr: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html'
})

export class SignInComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authService.signOut();
  }

  onSubmit(): void {
    this.authService.signIn(this.model.email, this.model.password)
      .then(
        data => {
          this.router.navigate(['items']);
        },
        error => {
          console.log(error);
          toastr.warning('Incorrect username/password.');
        });
  }
}
