import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    console.log(this.items);
  }

  ngOnInit(): void {
    this.getItems();
  }
}
