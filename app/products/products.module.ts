import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductsComponent }  from './products.component';
import { productsRouting } from './products.routing';

import { ProductService } from './products.service';

@NgModule({
  imports: [ BrowserModule, productsRouting ],
  declarations: [ ProductsComponent ],
  providers:[ ProductService ]
})
export class ProductsModule {}

