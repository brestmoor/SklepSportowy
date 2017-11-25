import {Pipe, PipeTransform} from '@angular/core';
import {ProductAndNumber} from "./types";

@Pipe({
  name: 'priceFrom'
})
export class PriceFromPipe implements PipeTransform {

  transform(products: ProductAndNumber[], priceDown: number): ProductAndNumber[] {
    if (priceDown != null && priceDown != undefined) {
      return products.filter(productAndNumber => productAndNumber.product.price >= priceDown)
    } else {
      return products
    }
  }
}
