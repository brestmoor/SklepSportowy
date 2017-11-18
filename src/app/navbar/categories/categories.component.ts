import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [DataService]
})
export class CategoriesComponent implements OnInit {

  categories: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCategories().then(categories => {
      this.categories = categories;
    })
  }

}
