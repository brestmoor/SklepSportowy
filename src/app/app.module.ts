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
import { MakeOrderComponent } from './make-order/make-order.component';
import {FormsModule} from "@angular/forms";
import { FiltersComponent } from './products-container/filters/filters.component';
import { StringContainsPipe } from './string-contains.pipe';
import { GetProductsForSubTabPipe } from './get-products-for-sub-tab.pipe';
import { PriceFromPipe } from './price-from.pipe';
import { PriceToPipe } from './price-to.pipe';
import { SaveResultToVariablePipe } from './save-result-to-variable.pipe';

const appRoutes: Routes = [
  {path: '', component: ProductsContainerComponent},
  {path: 'cart', component: CartComponent},
  {path: 'makeOrder', component: MakeOrderComponent}
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
    MakeOrderComponent,
    FiltersComponent,
    StringContainsPipe,
    GetProductsForSubTabPipe,
    PriceFromPipe,
    PriceToPipe,
    SaveResultToVariablePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
