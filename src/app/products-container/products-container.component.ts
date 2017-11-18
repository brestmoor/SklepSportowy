import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  products: Product[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getProducts().then((products) => {
      this.products = products;
    })
  }
}
