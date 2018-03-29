import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public ds: DataService, private router: Router, private route: ActivatedRoute) { }

  orderIndexes: number[] = [0, 1, 2, 3, 4];

  ngOnInit() {}

}
