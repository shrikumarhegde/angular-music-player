import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchKey: string = '';
  search(value: string) {
    this.searchKey = value;
  }
  constructor() {}

  ngOnInit() {}
}
