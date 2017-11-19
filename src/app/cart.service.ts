import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class CartService {

  products: Map<Product, number> = new Map();

  private itemAddedSource = new Subject<Product>();
  private itemRemovedSource = new Subject<Product>();

  public itemAdded = this.itemAddedSource.asObservable();
  public itemRemoved = this.itemRemovedSource.asObservable();

  public addItem(product: Product) {
    this.products.set(product, (isNaN(this.products.get(product))) ? 1 : this.products.get(product) + 1);
    this.itemAddedSource.next(product);
  }

  public removeItem(toBeRemoved: Product) {
    this.products.set(toBeRemoved, this.products.get(toBeRemoved) -1);
    this.itemRemovedSource.next(toBeRemoved);
  }

  public getNumber(product: Product) {
    return this.products.get(product) || 0;
  }
}
