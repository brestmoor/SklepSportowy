import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input()
  category: string;
  @Input()
  active: boolean;

  @Output()
  onChosen = new EventEmitter<string>();

  constructor() { }

  propagateChoice() {
    this.onChosen.emit(this.category);
  }

  ngOnInit() {
  }

}
