import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-best-selling-section',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './best-selling-section.component.html',
  styleUrl: './best-selling-section.component.scss',
})
export class BestSellingSectionComponent {
  cardType: string = 'best-selling-section';
  @Input() products: any[] = [];
}
