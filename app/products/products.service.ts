import { Injectable } from '@angular/core';
import { Product } from './product';

import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {
    getProducts(): Promise<Product[]> {
        return Promise.resolve(PRODUCTS);
    }
    getProductByID(id: number): Promise<Product> {
        return Promise.resolve(PRODUCTS).then(
                products=>products.filter(p => p.id==id)[0]
            )
    }
}