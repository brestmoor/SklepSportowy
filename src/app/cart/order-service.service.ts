import { Injectable } from '@angular/core';
import {User} from "../types";
import {Http} from "@angular/http";

@Injectable()
export class OrderServiceService {

  constructor(http: Http) { }

  public placeNewOrder(user: User, productIds: number[]) {

  }

}
