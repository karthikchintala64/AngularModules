import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';

export const productRoutes:Routes=[
    {path:'products',component:ProductsComponent}
]

export const productsRoutingProviders: any[] = [

];

export const productsRouting = RouterModule.forChild(productRoutes);
