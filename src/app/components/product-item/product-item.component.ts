import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../products/Product.type';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;
}
