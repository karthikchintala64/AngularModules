import { Component, OnInit } from '@angular/core';
import { ProductService } from './products.service';
import { Product } from './product';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: 'templates/productDetail.html'
})
export class ProductDetailComponent implements OnInit {

    public selectedProduct:Product;

    constructor(
        private productService:ProductService,
        private activatedRoute:ActivatedRoute
    ) { }

    ngOnInit():void {
        this.selectedProduct=new Product(); 

     
        this.activatedRoute.params.forEach((params:Params)=> {
            let id=+params['productid'];
            this.getProductByID(id); 
        });

        
    }

    getProductByID(id:number){
        this.productService.getProductByID(id).then(
                product=>this.selectedProduct=product
            );
    }
}