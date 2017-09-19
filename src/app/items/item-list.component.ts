import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ItemService } from './item.service';
import { Item } from './item';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html'
})

export class ItemListComponent implements OnInit {

  items: Item[];

  constructor(
    private itemService: ItemService,
    private router: Router) { }

  getItems(): void {
    this.itemService.getItems()
      .then(items => this.items = items);
  }

  completeItem(item: Item): void {
    this.itemService
      .delete(item.id)
      .then(() => {
        this.items = this.items.filter(i => i !== item);
      });
  }

  ngOnInit(): void {
    this.getItems();
  }
}
