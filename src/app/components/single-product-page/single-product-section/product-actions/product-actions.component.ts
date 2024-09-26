import { Component } from '@angular/core';

@Component({
  selector: 'app-product-actions',
  standalone: true,
  imports: [],
  templateUrl: './product-actions.component.html',
  styleUrl: './product-actions.component.scss',
})
export class ProductActionsComponent {
  quantity: number = 1;

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  addToCart() {
    console.log(`Added ${this.quantity} item(s) to cart.`);
  }

  buyNow() {
    console.log(`Buying ${this.quantity} item(s) now.`);
  }
}
