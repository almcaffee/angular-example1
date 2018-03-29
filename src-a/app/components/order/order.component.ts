import { Component, OnInit } from '@angular/core';
import { DataService, Order, SortOptions } from '../../../../shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  order: Order;
  sort: SortOptions;

  constructor(public ds: DataService, private route: ActivatedRoute) {
    this.sort = { key: 'price', dir: 'desc' };
    this.route.params.map((params)=> params.id)
    .subscribe(id=> this.getOrder(id));
  }

  ngOnInit() {
  }

  getOrder(id: string) {
    this.order = this.ds.orders.find(o=> o.id === id);
    this.order.products = this.ds.sort(this.order.products, this.sort.key, this.sort.dir);
  }

  sortProducts(key: string) {
    if(this.sort.key === key) this.sort.dir = this.sort.dir === 'asc' ? 'desc' : 'asc';
    this.sort.key = key;
    this.order.products = this.ds.sort(this.order.products, this.sort.key, this.sort.dir);
  }

}
