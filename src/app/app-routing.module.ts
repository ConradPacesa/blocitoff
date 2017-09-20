import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SignUpComponent } from './auth/sign-up.component';
import { SignInComponent } from './auth/sign-in.component';
import { ItemListComponent } from './items/item-list.component';
import { CompletedItemComponent } from './items/completed-item.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'completed-items', component: CompletedItemComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
