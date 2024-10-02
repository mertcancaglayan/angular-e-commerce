import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FakeStoreApiService } from '../../../services/fake-store-api.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartId: number = 1;
  cartProducts: any[] = [];
  detailedProducts: any[] = [];

  constructor(
    private cartService: CartService,
    private apiService: FakeStoreApiService
  ) {}

  toggleCart() {
    this.cartService.toggleCart();
  }

  isCartOpen(): boolean {
    return this.cartService.isCartOpened();
  }

  ngOnInit(): void {
    this.cartService.getSingleCart(this.cartId).subscribe({
      next: (cart) => {
        this.cartProducts = cart.products;
        this.getCartProducts(this.cartProducts);
      },
      error: (error) => {
        console.error('Error fetching cart:', error);
      },
    });
  }

  getCartProducts(products: any) {
    for (let index = 0; index < products.length; index++) {
      this.apiService.getProductById(products[index].productId).subscribe({
        next: (product) => {
          this.detailedProducts.push({
            ...product,
            quantity: products[index].quantity,
          });
        },
        error: (error) => {
          console.error('Error fetching product:', error);
        },
      });
    }
  }

  getCartTotal(): number {
    return this.detailedProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
}
