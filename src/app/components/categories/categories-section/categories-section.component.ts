import { Component, OnInit } from '@angular/core';
import { CategoryTypeComponent } from './category-type/category-type.component';
import { CardComponent } from '../../card/card.component';
import { FakeStoreApiService } from '../../../services/fake-store-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

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
  products: any[] = [];

  constructor(private apiService: FakeStoreApiService) {}

  ngOnInit(): void {
    this.apiService.getAllProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }
}
