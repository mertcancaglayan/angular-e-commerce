import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Testimonial } from '../../../models/testimonial.model';
import { testimonials } from '../../../utils/testimonial-list';

@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.scss',
})
export class TestimonialSectionComponent implements AfterViewInit {
  slider!: HTMLElement;
  error: boolean = false;

  testimonials: Testimonial[] = testimonials

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slider = document.querySelector<HTMLElement>('.slider')!;
      if (!this.slider) {
        this.error = true;
        console.error(this.error);
        return;
      }
    }
  }

  moveTheSlider(direction: 'next' | 'prev') {
    if (!this.slider) return;

    const slideWidth = this.slider.clientWidth;
    const maxScrollLeft = this.slider.scrollWidth - this.slider.clientWidth;

    if (direction === 'prev') {
      if (this.slider.scrollLeft === 0) return;
      this.slider.scrollBy({
        left: -slideWidth,
        behavior: 'smooth',
      });
    } else if (direction === 'next') {
      if (this.slider.scrollLeft === maxScrollLeft) return;
      this.slider.scrollBy({
        left: slideWidth,
        behavior: 'smooth',
      });
    }
  }
}
