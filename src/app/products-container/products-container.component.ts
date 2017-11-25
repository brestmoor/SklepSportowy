import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ProductAndNumber} from "../types";

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css'],
  providers: [DataService]
})
export class ProductsContainerComponent implements OnInit {
  allproducts: ProductAndNumber[];
  products: ProductAndNumber[] = [];

  categories: string[] = [];

  criteria: string = "";
  priceFrom: number;
  priceTo: number;

  constructor(private dataService: DataService) {
  }

  setSearchCriteria(criteria: string) {
    this.criteria = criteria;
  }

  setPriceFrom(priceFrom: number) {
    this.priceFrom = priceFrom;
  }

  setPriceTo(priceTo: number) {
    this.priceTo = priceTo;
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
