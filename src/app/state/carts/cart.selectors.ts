import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducers';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCart = createSelector(
  selectCartState,
  (state) => state.cart
);

export const selectCartProducts = createSelector(
  selectCart,
  (cart) => cart?.products || []
);

export const selectCartTotal = createSelector(selectCartProducts, (products) =>
  products.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  )
);
