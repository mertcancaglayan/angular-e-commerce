import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/carts';

  constructor(private http: HttpClient) {}

  updateCart(cartId: number, products: CartProduct[]): Observable<any> {
    const body = {
      userId: 5,
      date: new Date().toISOString(),
      products: products.map((p) => ({
        productId: p.productId,
        quantity: p.quantity,
      })),
    };

    return this.http.put(`${this.apiUrl}/${cartId}`, body);
  }

  getSingleCart(cartId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${cartId}`);
  }
}
