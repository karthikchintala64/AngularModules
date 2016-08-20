import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Product } from './product';

@Component({
    providers:[ProductService],
    styleUrls:['styles/products.css'],
    templateUrl: 'templates/products.html'
})
export class ProductsComponent implements OnInit {

    products:Product[];
    
    constructor(private productService:ProductService) { }

    ngOnInit() { this.getProducts() }

    getProducts(){
        this.productService.getProducts().then(products=>this.products=products);
    }

}