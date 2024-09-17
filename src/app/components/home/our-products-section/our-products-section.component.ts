import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-our-products-section',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './our-products-section.component.html',
  styleUrl: './our-products-section.component.scss'
})
export class OurProductsSectionComponent {
  cardType: string = 'our-products-section';

}
