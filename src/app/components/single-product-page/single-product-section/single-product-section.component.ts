import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreApiService } from '../../../services/fake-store-api.service';

@Component({
  selector: 'app-single-product-section',
  standalone: true,
  imports: [],
  templateUrl: './single-product-section.component.html',
  styleUrl: './single-product-section.component.scss',
})
export class SingleProductSectionComponent implements OnInit {
  productId!: number;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private apiService: FakeStoreApiService
  ) {}

  ngOnInit(): void {
    this.getProductId();
  }

  getProductId() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.productId = +id;
        this.fetchProduct();
      }
    });
  }

  fetchProduct(): void {
    this.apiService.getProductById(this.productId).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (error) => {
        console.error('Error fetching product:', error);
      },
    });
  }
}
