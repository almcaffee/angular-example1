import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService, SortOptions } from '../../../../shared/services/data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, Subscription} from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  sort: SortOptions;
  sortSub: Subscription;
  productForm: FormGroup;
  activeFilter: any;
  filterKeys: any[] = [
    { key: 'id', text: 'Products #'},
    { key: 'manufacturer', text: 'Manufacturer'},
    { key: 'price', text: 'Price'}
  ];

  constructor(public ds: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.activeFilter = this.filterKeys[0];
    this.sort = { key: 'date', dir: 'desc' };
    this.productForm = new FormGroup({
      value: new FormControl()
    });
    this.sortSub = this.productForm.valueChanges.subscribe(formValue=> this.filterProducts(formValue.value));
  }

  ngOnDestroy() {
    this.sortSub.unsubscribe();
  }

  changeFilter(value: any) {
    this.activeFilter = this.filterKeys.find(f=> f.key === value);
  }

  filterProducts(value: string) {
    this.ds.filterProducts(this.activeFilter.key, value);
  }

  sortProducts(key: string) {
    if(this.sort.key === key) this.sort.dir = this.sort.dir === 'asc' ? 'desc' : 'asc';
    this.sort.key = key;
    this.ds.sortProducts(this.sort);
  }

}
