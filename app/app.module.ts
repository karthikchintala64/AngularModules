import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

import { routing, appRoutingProviders } from './app.routing';

import { ProductsModule } from '../products/products.module';
import { ServicesModule } from '../services/services.module';

@NgModule({
  imports: [ BrowserModule, ProductsModule,ServicesModule, routing ],
  declarations: [ AppComponent, HomeComponent, AboutComponent ],
  bootstrap: [ AppComponent ],
  providers:[ appRoutingProviders ]
})
export class AppModule { }
