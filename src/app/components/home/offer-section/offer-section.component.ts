import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-offer-section',
  standalone: true,
  templateUrl: './offer-section.component.html',
  styleUrls: ['./offer-section.component.scss'],
})
export class OfferSectionComponent implements OnInit, OnDestroy {
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private countdownDate = new Date('Sep 30, 2024 23:59:59').getTime();
  private intervalId: number | undefined;

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    if (typeof window !== 'undefined') {
      const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = this.countdownDate - now;

        if (distance < 0) {
          if (this.intervalId) {
            clearInterval(this.intervalId);
          }
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          return;
        }

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      };

      updateCountdown();
      this.intervalId = window.setInterval(updateCountdown, 1000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
