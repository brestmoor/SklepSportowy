import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  public placeNewOrder(name: string, address: string, productIds: number[]) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:5000/orders', JSON.stringify({
      "name": name,
      "address": address,
      "productIds": productIds
    }), options).toPromise()
  }

}
