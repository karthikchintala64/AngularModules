import { NgModule }      from '@angular/core';


import { ProductsComponent }  from './products.component';
import { productsRouting } from '../products/products.routing';

@NgModule({
  imports: [ productsRouting ],
  declarations: [ProductsComponent],
  providers:[ ]
})
export class ProductsModule { }

