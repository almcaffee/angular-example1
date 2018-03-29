import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService, Customer, Order, SortOptions } from '../../../../shared/services/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subscription} from 'rxjs';

@Component({
  selector: 'customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  sort: SortOptions;
  sortSub: Subscription;
  customerForm: FormGroup;
  activeFilter: any;
  filterKeys: any[] = [
    { key: 'lastName', text: 'Last Name'},
    { key: 'firstName', text: 'First Name'},
    { key: 'firm', text: 'Firm'}
  ];

  constructor(public ds: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeFilter = this.filterKeys[0];
    this.sort = { key: 'lastName', dir: 'desc' };
    this.customerForm = new FormGroup({
      value: new FormControl()
    });
    this.sortSub = this.customerForm.valueChanges.subscribe(formValue=> this.filterCustomers(formValue.value));
  }

  ngOnDestroy() {
    this.sortSub.unsubscribe();
  }

  changeFilter(value: any) {
    this.activeFilter = this.filterKeys.find(f=> f.key === value);
  }

  filterCustomers(value: string) {
    this.ds.filterCustomers(this.activeFilter.key, value);
  }

  sortCustomers(key: string) {
    if(this.sort.key === key) {
      this.sort.dir = this.sort.dir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sort.key = key;
    }
    this.ds.sortCustomers(this.sort);
  }

}
