import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";
import {ProductAndNumber} from "./types";

@Injectable()
export class DataService {

  constructor(private http:Http) {
  }

  getCategories():Promise<string[]> {
    return this.http.get('http://localhost:5000/categories')
      .toPromise()
      .then(response => response.json() as string[])
  }

  getProducts():Promise<ProductAndNumber[]> {
    return this.http.get('http://localhost:5000/products')
      .toPromise()
      .then(response => response.json() as ProductAndNumber[])
  }
}
