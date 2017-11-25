import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";
import {ProductAndNumber} from "./types";

@Injectable()
export class DataService {

  constructor(private http:Http) {
  }

  getCategories():Promise<string[]> {
    return this.http.get('https://sklepsportowy-ztw.firebaseio.com/categories.json')
      .toPromise()
      .then(response => response.json() as string[])
  }

  getProducts():Promise<ProductAndNumber[]> {
    return this.http.get('https://sklepsportowy-ztw.firebaseio.com/products.json')
      .toPromise()
      .then(response => response.json() as ProductAndNumber[])
  }
}
