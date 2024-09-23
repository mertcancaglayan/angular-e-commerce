import { Component } from '@angular/core';
import { CategoryTypeComponent } from "./category-type/category-type.component";

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CategoryTypeComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.scss'
})
export class CategoriesSectionComponent {

}
