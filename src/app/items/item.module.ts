import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from '../auth/auth.service';
import { ItemService } from './item.service';

import { ItemListComponent } from './item-list.component';

@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ItemService]
})
export class ItemModule { }
