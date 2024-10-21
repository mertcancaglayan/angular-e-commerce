import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { categories } from '../../../../utils/category-list';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.scss',
})
export class MobileNavbarComponent implements OnInit {
  isMenuClosed: boolean = true
  categoriesList = categories;

  constructor(private router: Router, private cartService: CartService) {}

  navigateToCategory(category: string): void {
    this.router.navigate(['/categories'], {
      queryParams: { category },
    });
    this.toggleMenu() 
  }

  toggleMenu() {
    this.isMenuClosed = !this.isMenuClosed;
  }

  toggleCart() {
    this.cartService.toggleCart();
  }

  isCartOpen(): boolean {
    return this.cartService.isCartOpened();
  }

  ngOnInit(): void {
    this.isMenuClosed = true;
  }
}
