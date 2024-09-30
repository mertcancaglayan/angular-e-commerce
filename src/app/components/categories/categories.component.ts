import { Component } from '@angular/core';
import { HeaderComponent } from '../layouts/header/header.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { FooterComponent } from "../layouts/footer/footer.component";
import { CartComponent } from "../layouts/cart/cart.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HeaderComponent, CategoriesSectionComponent, FooterComponent, CartComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {}
