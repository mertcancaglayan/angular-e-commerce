import { Component } from '@angular/core';
import { HeaderComponent } from "../layouts/header/header.component";
import { FooterComponent } from "../layouts/footer/footer.component";
import { SingleProductSectionComponent } from "./single-product-section/single-product-section.component";

@Component({
  selector: 'app-single-product-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SingleProductSectionComponent],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss'
})
export class SingleProductPageComponent {
}
