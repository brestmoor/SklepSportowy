import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  public searchCriteria: string;
  public priceFrom: number;
  public priceTo: number;

  @Output()
  public searchCriteriaEmitter = new EventEmitter<string>()

  @Output()
  public priceFromEmitter = new EventEmitter<number>();

  @Output()
  public priceToEmitter = new EventEmitter<number>();

  searchCriteriaSet(searchCriteria: string) {
    this.searchCriteriaEmitter.emit(searchCriteria);
  }

  priceFromSet(priceFrom: number) {
    this.priceFromEmitter.emit(priceFrom);
  }

  priceToSet(priceTo: number) {
    this.priceToEmitter.emit(priceTo);
  }

  constructor() { }

  ngOnInit() {
  }

}
