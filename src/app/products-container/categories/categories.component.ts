import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  @Input()
  categories: string[] = [];

  @Output()
  onChosenEmitter = new EventEmitter<string>();

  setCategory: string;

  onChosen(category: string) {
    this.onChosenEmitter.emit(category);
    this.setCategory = category;
  }
}
