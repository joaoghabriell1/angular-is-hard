import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Product } from './Product.type';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products!: Product[];

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
