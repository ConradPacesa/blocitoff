import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from '../auth/auth.service';
import { ItemService } from './item.service';

import { ItemListComponent } from './item-list.component';
import { CompletedItemComponent } from './completed-item.component';

import { CompletedPipe } from './completed.pipe';
import { IncompletedPipe } from './incompleted.pipe';

@NgModule({
  declarations: [
    ItemListComponent,
    CompletedItemComponent,
    CompletedPipe,
    IncompletedPipe
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
