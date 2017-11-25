import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ProductAndNumber} from "../../types";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnChanges {
  @Input('storeProducts')
  products: ProductAndNumber[];

  subtabs: number[];

  currentSubtab: number;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    let subtabsNo = (Math.ceil(this.products.length / 3));
    this.subtabs = Array.from({length: subtabsNo}, (v, k) => k + 1);
    this.currentSubtab = 1;
  }

  public reloadSubtab(subtabNo: number) {
    this.currentSubtab = subtabNo;
  }

  public nextSubtab() {
    if (this.currentSubtab < this.subtabs.length) {
      this.currentSubtab++;
    }
  }

  public previousSubtab() {
    if (this.currentSubtab != 1) {
      this.currentSubtab--;
    }
  }
}
