import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products/Product.type';
import { ProductsService } from '../../services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product!: Product;

  @Input('productId') productId = '';

  constructor(private service: ProductsService) {}

  ngOnInit() {
    if (this.productId) {
      this.service
        .getProduct(this.productId)
        .subscribe((product) => (this.product = product));
    }
  }
}
