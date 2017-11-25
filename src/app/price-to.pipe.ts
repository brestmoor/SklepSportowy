import { Pipe, PipeTransform } from '@angular/core';
import {ProductAndNumber} from "./types";

@Pipe({
  name: 'priceTo'
})
export class PriceToPipe implements PipeTransform {

  transform(products: ProductAndNumber[], priceDown: number): ProductAndNumber[] {
    if (priceDown != null && priceDown != undefined) {
      return products.filter(productAndNumber => productAndNumber.product.price <= priceDown)
    } else {
      return products
    }
  }

}
