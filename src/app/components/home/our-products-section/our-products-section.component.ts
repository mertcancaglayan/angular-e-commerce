import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-our-products-section',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './our-products-section.component.html',
  styleUrl: './our-products-section.component.scss',
})
export class OurProductsSectionComponent {
  cardType: string = 'our-products-section';
  @Input() products: any[] = [];
}
