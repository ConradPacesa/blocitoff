import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './auth/sign-up.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
