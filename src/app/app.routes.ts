import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
];
