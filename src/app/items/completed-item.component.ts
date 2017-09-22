import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from './item.service';
import { Item } from './item';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-completed-item',
  templateUrl: './completed-item.component.html',
  styleUrls: ['./completed-item.component.css']
})

export class CompletedItemComponent implements OnInit {

  items: Item[];

  constructor(
    private itemService: ItemService,
    private router: Router) { }

  getItems(): void {
    this.itemService.getItems()
      .then(items => this.items = items);
  }

  ngOnInit(): void {
    this.getItems();
  }
}
