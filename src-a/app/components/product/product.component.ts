import { Component, OnInit } from '@angular/core';
import { DataService, Product, OrderHistory, SortOptions } from '../../../../shared/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product;
  sort: SortOptions;

  constructor(public ds: DataService, private route: ActivatedRoute) {
    this.sort = { key: 'manufacturer', dir: 'asc' };
    this.route.params.map((params)=> params.id)
    .subscribe(id=> this.getProduct(id));
  }

  ngOnInit() {
  }

  getProduct(id: string) {
    console.log(id)
    this.product = this.ds.products.find(p=> p.id === id);
    this.product.orderHistory = this.ds.sort(this.product.orderHistory, this.sort.key, this.sort.dir);
  }

  sortProducts(key: string) {
    if(this.sort.key === key) this.sort.dir = this.sort.dir === 'asc' ? 'desc' : 'asc';
    this.sort.key = key;
    this.product.orderHistory = this.ds.sort(this.product.orderHistory, this.sort.key, this.sort.dir);
  }

}
