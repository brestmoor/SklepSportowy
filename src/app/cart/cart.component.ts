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

  products: Map<Product, number> = new Map();

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    _.uniq(this.cartService.products, product => product.name )
      .forEach(product => this.products.set(new Product('l', 'l', 2, 'l'), 1))
    console.log(this.cartService.products)
  }

  findOccurences(name: string) {
    return this.cartService.products
      .filter(product => product.name == name)
      .length
  }

}
