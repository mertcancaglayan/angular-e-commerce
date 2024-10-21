import {
  Component,
  HostListener,
  OnInit,
  AfterViewInit,
  QueryList,
  ElementRef,
  ViewChildren,
} from '@angular/core';
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
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  private currentSectionIndex = 0;

  @ViewChildren('section') sections!: QueryList<ElementRef>;

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

  @HostListener('window:wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    const delta = Math.sign(event.deltaY);

    if (delta > 0 && this.currentSectionIndex < this.sections.length - 1) {
      this.currentSectionIndex++;
    } else if (delta < 0 && this.currentSectionIndex > 0) {
      this.currentSectionIndex--;
    }

    this.scrollToSection(this.currentSectionIndex);
  }

  scrollToSection(index: number): void {
    const targetSection = this.sections.toArray()[index];
    const topOffset = targetSection.nativeElement.offsetTop;

    this.smoothScrollTo(topOffset, 200);
  }

  smoothScrollTo(targetPosition: number, duration: number): void {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * progress);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(scrollStep);
      }
    };

    window.requestAnimationFrame(scrollStep);
  }
}
