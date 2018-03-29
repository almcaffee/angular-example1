import { Component, OnInit } from '@angular/core';
import { DataService, Order, Product, Customer, ProductHistory, OrderHistory, SortOptions } from '../../../../shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer: Customer;
  orders: Order[];
  products: Product[];
  sort: SortOptions;

  constructor(public ds: DataService, private route: ActivatedRoute) {
    this.sort = { key: 'date', dir: 'desc' };
    this.route.params.map((params)=> params.id)
    .subscribe(id=> {
      this.getCustomer(id);
      this.getProductHistory();
    });
  }

  ngOnInit() {
  }

  getCustomer(id: string) {
    this.customer = this.ds.customers.find(c=> c.id === id);
  }

  getProductHistory() {
    this.customer['products'] = this.ds.getCustomerProductHistoryOrders(this.customer.orders);
    console.log(this.customer.products)
  }

  sortProducts(key: string) {
    if(this.sort.key === key) this.sort.dir = this.sort.dir === 'asc' ? 'desc' : 'asc';
    this.sort.key = key;
    this.customer.products = this.ds.sort(this.customer.products, this.sort.key, this.sort.dir);
  }

  sortOrders(key: string) {
    if(this.sort.key === key) this.sort.dir = this.sort.dir === 'asc' ? 'desc' : 'asc';
    this.sort.key = key;
    this.customer.orders = this.ds.sort(this.customer.orders, this.sort.key, this.sort.dir);
  }

}
