import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './body/products/products.component';
import {HttpModule} from "@angular/http";
import { ProductComponent } from './body/products/product/product.component';
import {CategoriesComponent} from "./navbar/categories/categories.component";
import {ProductsContainerComponent} from "./products-container/products-container.component";

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductComponent,
    ProductsContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
