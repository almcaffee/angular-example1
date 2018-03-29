import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../shared/services/data.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public ds: DataService) { }

  ngOnInit() {
  }

}
