import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnChanges {
  @Input('storeProducts')
  products: ProductAndNumber[];

  subtabs: number[];

  currentProducts: ProductAndNumber[] = [];
  currentSubtab: number;
  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    let subtabsNo = (Math.ceil(this.products.length / 3));
    this.subtabs = Array.from({length: subtabsNo}, (v, k) => k + 1);
    this.currentProducts = this.products.slice(0, 3);
    this.currentSubtab = 1;
  }

  public reloadSubtab(subtabNo: number) {
    this.currentProducts = this.switchProducts(subtabNo);
    this.currentSubtab = subtabNo;
  }

  switchProducts(subtabNo: number) {
    return this.products.slice((subtabNo - 1) * 3, (subtabNo - 1) * 3 + 3);
  }

  public nextSubtab() {
    if (this.currentSubtab < this.subtabs.length) {
      this.currentProducts = this.switchProducts(this.currentSubtab + 1);
      this.currentSubtab ++;
    }
  }

  public previousSubtab() {
    if (this.currentSubtab != 1) {
      this.currentProducts = this.switchProducts(this.currentSubtab - 1);
      this.currentSubtab --;
    }
  }
}
