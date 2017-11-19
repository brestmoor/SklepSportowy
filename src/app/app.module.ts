import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products-container/products/products.component';
import {HttpModule} from "@angular/http";
import { ProductComponent } from './products-container/products/product/product.component';
import {CategoriesComponent} from "./products-container/categories/categories.component";
import {ProductsContainerComponent} from "./products-container/products-container.component";
import { CategoryComponent } from './products-container/categories/category/category.component';
import {RouterModule, Routes} from "@angular/router";
import { CartComponent } from './cart/cart.component';
import { CartMiniatureComponent } from './cart/cart-miniature/cart-miniature.component';
import {CartService} from "./cart.service";

const appRoutes: Routes = [
  {path: '', component: ProductsContainerComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductComponent,
    ProductsContainerComponent,
    CategoryComponent,
    CartComponent,
    CartMiniatureComponent,
    CartMiniatureComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
