import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
  providers: [DataService]
})
export class ProductsContainerComponent implements OnInit {

  products: ProductAndNumber[] = [];
  categories: string[] = [];

  allproducts: ProductAndNumber[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getProducts().then((products) => {
      this.products = products;
      this.allproducts = products;
    });
    this.dataService.getCategories().then((categories) => {
      this.categories = categories;
    })
  }

  reorderProducts(category: string) {
    if (category == 'Wszystkie') {
      this.products = this.allproducts;
    } else {
      this.products = this.allproducts.filter((productAndNumber) => productAndNumber.product.category == category)
    }
  }
}
