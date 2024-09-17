import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-best-selling-section',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './best-selling-section.component.html',
  styleUrl: './best-selling-section.component.scss'
})
export class BestSellingSectionComponent {

}
