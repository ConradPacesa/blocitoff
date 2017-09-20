import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { SignUpComponent } from './sign-up.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
