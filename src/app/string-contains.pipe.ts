import {Pipe, PipeTransform} from '@angular/core';
import {ProductAndNumber} from "./types";

@Pipe({
  name: 'stringContains'
})
export class StringContainsPipe implements PipeTransform {

  transform(products: ProductAndNumber[], text: string): ProductAndNumber[] {
    if (text) {
      return products.filter(product => product.product.name.toLowerCase().includes(text.toLowerCase()))
    } else {
      return products;
    }
  }

}
