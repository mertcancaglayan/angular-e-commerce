import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { BannerComponent } from './banner/banner.component';
import { BestSellingSectionComponent } from './best-selling-section/best-selling-section.component';
import { OurProductsSectionComponent } from './our-products-section/our-products-section.component';
import { OfferSectionComponent } from './offer-section/offer-section.component';
import { RecommendationSectionComponent } from './recommendation-section/recommendation-section.component';
import { TestimonialSectionComponent } from './testimonial-section/testimonial-section.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { FakeStoreApiService } from '../../services/fake-store-api.service';
import { Product } from '../../models/product.model';
import { CartComponent } from "../layouts/cart/cart.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    BestSellingSectionComponent,
    OurProductsSectionComponent,
    OfferSectionComponent,
    RecommendationSectionComponent,
    TestimonialSectionComponent,
    FooterComponent,
    CartComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: FakeStoreApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
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
