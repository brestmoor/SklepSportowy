import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import * as _ from 'underscore';
import {Dictionary} from "underscore";
import {Product} from "../types";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  idsMap: Map<number, number> = new Map();
  products: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    let uniqueProducts = _.uniq(this.cartService.products, product => product.id );
    this.products = uniqueProducts;

    uniqueProducts
      .forEach(product => this.idsMap.set(product.id, this.findOccurences(product.id)));
  }

  public remove(product: Product) {
    this.cartService.removeItem(product)
    this.idsMap.set(product.id, this.idsMap.get(product.id) - 1)
    if(this.idsMap.get(product.id) == 0) {
      this.products.splice(this.products.findIndex(item => item.id == product.id), 1);
    }
  }

  findOccurences(id: number) {
    return this.cartService.products
      .filter(product => product.id == id)
      .length
  }

}
