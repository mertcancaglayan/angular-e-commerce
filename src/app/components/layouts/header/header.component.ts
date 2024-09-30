import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { categories } from '../../../utils/category-list';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  categoriesList = categories;

  constructor(private router: Router, private cartService: CartService) {}

  navigateToCategory(category: string): void {
    this.router.navigate(['/categories'], {
      queryParams: { category },
    });
  }

  toggleCart() {
    this.cartService.toggleCart();
  }

  isCartOpen(): boolean {
    return this.cartService.isCartOpened();
  }
}
