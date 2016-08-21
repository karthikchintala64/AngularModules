import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsComponent }  from './products.component';
import { ProductDetailComponent }  from './productdetail.component';
import { productsRouting } from './products.routing';

import { ProductService } from './products.service';

@NgModule({
  imports: [ BrowserModule, productsRouting ],
  declarations: [ ProductsComponent, ProductDetailComponent ],
  providers:[ ProductService ]
})
export class ProductsModule {}

