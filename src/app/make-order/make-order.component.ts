import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {OrderService} from "../cart/order.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css'],
  providers: [OrderService]
})
export class MakeOrderComponent implements OnInit {
  data: UserInput = {name: "", address: ""};
  isSubmitted: boolean = false;

  constructor(private cartService: CartService, private orderService: OrderService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.isSubmitted) {
      let productIds = this.cartService.products.map(product => product.id);
      this.orderService.placeNewOrder(this.data.name, this.data.address, productIds)
        .then((value) => {
          this.writeSuccessMessage();
          this.cartService.emptyOut();
        }, () => this.writeErrorMessage());
      this.isSubmitted = true;
    }
  }


  private writeSuccessMessage() {
    debugger;
    this.toastrService.success("Złożono zamówienie", null, {
      positionClass: 'toast-top-center'
    })
  }

  private writeErrorMessage() {
    debugger;
    this.toastrService.error("Wystąpił błąd przy przetwarzaniu zamówienia", null, {
      positionClass: 'toast-top-center'
    })

  }
}

class UserInput {
  constructor(public name: string, public address: string) {
  }
}
