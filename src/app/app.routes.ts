import { Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'products', component: ProductsComponent },
];
