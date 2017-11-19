import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../../cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  @Input()
  productAndNumber: ProductAndNumber;

  product: Product;
  number: number;

  constructor(private cartService: CartService) {
  }

  addToCart() {
    if (this.number > 0) {
      this.cartService.addItem(this.productAndNumber.product);
      this.number --;
    }
  }

  removeFromCart() {
    if (this.productsInCart() > 0) {
      this.cartService.removeItem(this.product);
      this.number ++;
    }
  }

  productsInCart() {
    return this.cartService.getNumber(this.product);
  }

  ngOnInit() {
    this.product = this.productAndNumber.product;
    this.number = this.productAndNumber.number - this.productsInCart();
  }

  isCartEmpty() {
    return this.productsInCart() == 0;
  }
}
