/**
 * Created by Filip on 12.11.2017.
 */
export class Product {
  constructor(public name:string, public description:string, public price:number, public category:string) {
  }
}

export class ProductAndNumber {
  constructor(public product: Product, public number:number) {
  }
}
