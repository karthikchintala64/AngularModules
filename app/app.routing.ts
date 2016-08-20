import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';



export const routes:Routes=[
    {path:'', component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'services',loadChildren:'../services/services.module'}
]

export const appRoutingProviders: any[] = [
    
];

export const routing=RouterModule.forRoot(routes);