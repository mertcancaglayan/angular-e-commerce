import {
  Component,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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

  testimonials = [
    {
      name: 'John Doe',
      text: 'This service was fantastic! The team was professional, responsive, and delivered exactly what I needed in no time.',
    },
    {
      name: 'Jane Smith',
      text: 'I was thoroughly impressed with their attention to detail and excellent customer service. I will definitely return!',
    },
    {
      name: 'Emily Johnson',
      text: 'The team provided outstanding support throughout the entire process, ensuring all my questions were answered promptly and clearly.',
    },
    {
      name: 'Michael Brown',
      text: 'A highly professional team that delivered exceptional results. Their work exceeded my expectations, and I couldn’t be happier.',
    },
    {
      name: 'Sarah Wilson',
      text: 'Their customer service is top-notch. They kept me informed at every step and delivered exactly as promised. Wonderful experience!',
    },
    {
      name: 'David Taylor',
      text: 'I am extremely satisfied with the service. The team was knowledgeable, friendly, and delivered great results within the deadline.',
    },
  ];

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
