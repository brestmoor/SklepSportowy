import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Product} from "./types";
import * as _ from "underscore";

@Injectable()
export class CartService {

  products: Product[] = [];

  private itemAddedSource = new Subject<Product>();
  private itemRemovedSource = new Subject<Product>();

  public itemAdded = this.itemAddedSource.asObservable();
  public itemRemoved = this.itemRemovedSource.asObservable();

  public addItem(product: Product) {
    this.products.push(product);
    this.itemAddedSource.next(product);
  }

  public removeItem(toBeRemoved: Product) {
    let index = this.products.findIndex(product => product.name == toBeRemoved.name);
    this.products.splice(index, 1);
    this.itemRemovedSource.next(toBeRemoved);
  }

  public getNumber(product: Product) {
    return this.products.reduce((first, second) => first + (second.name == product.name ? 1 : 0), 0)
  }

  public getAsMap() {
    let productsMap = new Map();
     _.uniq(this.products, product => product.name )
      .forEach(product => productsMap.set(new Product('l', 'l', 2, 'l'), 1))
    return productsMap;
  }
}
