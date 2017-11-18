import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [DataService]
})
export class NavbarComponent implements OnInit {

  categories: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCategories().then(categories => {
      this.categories = categories;
    })
  }

}
