import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../services/cart.service';
import { CartProduct } from '../../../../models/cart.model';

@Component({
  selector: 'app-product-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.scss'],
})
export class ProductActionsComponent {
  @Input() productId!: number;
  quantity: number = 1;
  cartId: number = 1;

  constructor(private cartService: CartService) {}

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  addToCart() {
    const cartProduct: CartProduct = {
      productId: this.productId,
      quantity: this.quantity,
    };

    this.cartService.updateCart(this.cartId, [cartProduct]).subscribe({
      next: (response) => {
        response;
      },
      error: (error) => {
        console.error('Error updating cart:', error);
      },
    });
  }

  toggleCart() {
    this.cartService.toggleCart();
  }
}
