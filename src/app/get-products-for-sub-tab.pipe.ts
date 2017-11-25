import {Pipe, PipeTransform} from '@angular/core';
import {ProductAndNumber} from "./types";

@Pipe({
  name: 'getProductsForSubTab'
})
export class GetProductsForSubTabPipe implements PipeTransform {

  transform(products: ProductAndNumber[], subtabNo: number): ProductAndNumber[] {
    if (products) {
      return products.slice((subtabNo - 1) * 3, (subtabNo - 1) * 3 + 3);
    }
  }

}
