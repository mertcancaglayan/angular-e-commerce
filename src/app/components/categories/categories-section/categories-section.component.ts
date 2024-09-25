import { Component, OnInit } from '@angular/core';
import { CategoryTypeComponent } from './category-type/category-type.component';
import { CardComponent } from '../../card/card.component';
import { FakeStoreApiService } from '../../../services/fake-store-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [
    CategoryTypeComponent,
    CardComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './categories-section.component.html',
  styleUrls: ['./categories-section.component.scss'],
})
export class CategoriesSectionComponent implements OnInit {
  cardType: string = 'our-products-section';
  products: Product[] = [];
  category: string | null = null;

  constructor(
    private apiService: FakeStoreApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'] || null;
      this.fetchData();
    });
  }

  fetchData(): void {
    if (this.category) {
      this.apiService.getProductsByCategory(this.category).subscribe(
        (data) => {
          this.products = data;
        },
        (error) => {
          console.error('Error fetching products by category', error);
        }
      );
    } else {
      this.apiService.getAllProducts().subscribe(
        (data) => {
          this.products = data;
        },
        (error) => {
          console.error('Error fetching products', error);
        }
      );
    }
  }
}
