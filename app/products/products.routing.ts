import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './productdetail.component';

export const productRoutes:Routes=[
    {path:'products',component:ProductsComponent},
    {path:'products/:productid',component:ProductDetailComponent}
]

export const productsRoutingProviders: any[] = [

];

export const productsRouting = RouterModule.forChild(productRoutes);
