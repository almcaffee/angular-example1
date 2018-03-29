import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService, SortOptions } from '../../../../shared/services/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subscription} from 'rxjs';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {
  sort: SortOptions;
  sortSub: Subscription;
  orderForm: FormGroup;
  activeFilter: any;
  filterKeys: any[] = [
    { key: 'id', text: 'Order #'},
    { key: 'date', text: 'Date (M/D/YY)'},
    { key: 'price', text: 'Price'},
    { key: 'customer', text: 'Customer'}
  ];

  constructor(public ds: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeFilter = this.filterKeys[0];
    this.sort = { key: 'date', dir: 'desc' };
    this.orderForm = new FormGroup({
      value: new FormControl()
    });
    this.sortSub = this.orderForm.valueChanges.subscribe(formValue=> this.filterOrders(formValue.value));
  }

  ngOnDestroy() {
    this.sortSub.unsubscribe();
  }

  changeFilter(value: any) {
    this.activeFilter = this.filterKeys.find(f=> f.key === value);
  }

  filterOrders(value: string) {
    this.ds.filterOrders(this.activeFilter.key, value);
  }

  sortOrders(key: string) {
    if(this.sort.key === key) {
      this.sort.dir = this.sort.dir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sort.key = key;
    }
    this.ds.sortOrders(this.sort);
  }

}
