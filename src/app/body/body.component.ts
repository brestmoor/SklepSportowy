import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: [DataService]
})
export class BodyComponent implements OnInit {
  subtabs: number;
  products: Product[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getProducts().then((products) => {
      this.products = products;
      this.subtabs = products.length % 3;
    })
  }

}
