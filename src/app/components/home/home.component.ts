import { Component } from '@angular/core';
import { HeaderComponent } from "../layouts/header/header.component";
import { BannerComponent } from "./banner/banner.component";
import { BestSellingSectionComponent } from "./best-selling-section/best-selling-section.component";
import { OurProductsSectionComponent } from "./our-products-section/our-products-section.component";
import { OfferSectionComponent } from "./offer-section/offer-section.component";
import { RecommendationSectionComponent } from "./recommendation-section/recommendation-section.component";
import { TestimonialSectionComponent } from "./testimonial-section/testimonial-section.component";
import { FooterComponent } from "../layouts/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, BestSellingSectionComponent, OurProductsSectionComponent, OfferSectionComponent, RecommendationSectionComponent, TestimonialSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
