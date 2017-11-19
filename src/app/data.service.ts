import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";

@Injectable()
export class DataService {

  constructor(private http:Http) {
  }

  getCategories():Promise<string[]> {
    return this.http.get('../assets/categories.json')
      .toPromise()
      .then(response => response.json() as string[])
  }

  getProducts():Promise<ProductAndNumber[]> {
    return this.http.get('../assets/products.json')
      .toPromise()
      .then(response => response.json() as ProductAndNumber[])
  }
}
