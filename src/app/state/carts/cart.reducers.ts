import { createReducer, on } from '@ngrx/store';
import { Cart } from '../../models/cart.model';
import {
  AddCart,
  UpdateCart,
  loadCart,
  loadCartSuccess,
  loadCartFailure,
} from './cart.action';

export interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: any;
}

export const initialState: CartState = {
  cart: null,
  loading: false,
  error: null,
};

export const CartReducer = createReducer(
  initialState,
  on(AddCart, (state, { cart }) => ({ ...state, cart })),
  on(UpdateCart, (state, { cartId, products }) => ({
    ...state,
    cart:
      state.cart && state.cart.id === cartId
        ? { ...state.cart, products }
        : state.cart,
  })),
  on(loadCart, (state) => ({ ...state, loading: true })),
  on(loadCartSuccess, (state, { cart }) => ({
    ...state,
    loading: false,
    cart,
  })),
  on(loadCartFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
