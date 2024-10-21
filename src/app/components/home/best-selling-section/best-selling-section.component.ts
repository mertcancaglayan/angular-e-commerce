import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-best-selling-section',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './best-selling-section.component.html',
  styleUrls: [
    './best-selling-section.component.scss',
    '../home.component.scss',
  ],
})
export class BestSellingSectionComponent {
  cardType: string = 'best-selling-section';
  @Input() products: Product[] = [];
}
