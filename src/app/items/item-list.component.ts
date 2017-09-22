import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ItemService } from './item.service';
import { Item } from './item';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
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

  createItem(name: HTMLInputElement): void {
    if (name.value !== '') {
      this.itemService
        .create(name.value)
        .then(result => {
          this.items.push(result);
        });
      name.value = '';
    }
  }

  completeItem(item: Item): void {
    this.itemService
      .update(item)
      .then(() => {
        this.items = this.items.filter(i => i !== item);
      });
  }

  countIncompleteItems(): number {
    let count: number = 0;
    let items: Item[] = this.items;
    for (let i: number = 0; i < items.length; i ++) {
      if (!items[i].completed) {
        count++
      }
    }
    return count;
  }

  anyItems(): boolean {
    let count: number = this.countIncompleteItems();
    return count > 0;
  }

  ngOnInit(): void {
    this.getItems();
  }
}
