import {Component, OnInit} from '@angular/core';
import {CartService} from "../../cart.service";

@Component({
  selector: 'app-cart-miniature',
  templateUrl: './cart-miniature.component.html',
  styleUrls: ['./cart-miniature.component.css']
})
export class CartMiniatureComponent implements OnInit {
  pricesSum: number = 0;
  itemsNumber: number = 0;

  constructor(private cartService: CartService) {
    cartService.itemAdded.subscribe(
      product => {
        this.itemsNumber++;
        this.pricesSum += product.price
      }
    );

    cartService.itemRemoved.subscribe(
      product => {
        this.itemsNumber--;
        this.pricesSum -= product.price
      }
    )
  }

  ngOnInit() {
    this.itemsNumber = this.cartService.products.length;
    this.pricesSum = this.cartService.products.reduce((first, second) =>  first + second.price, 0)
  }

}
