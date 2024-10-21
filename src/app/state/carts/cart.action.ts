import { createAction, props } from '@ngrx/store';
import { Cart, CartProduct } from '../../models/cart.model';

export const AddCart = createAction('[Cart] Add Cart', props<{ cart: Cart }>());

export const UpdateCart = createAction(
  '[Cart] Update Cart',
  props<{ cartId: number; products: CartProduct[] }>()
);

export const loadCart = createAction(
  '[Cart] Load Cart',
  props<{ cartId: number }>()
);

export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cart: Cart }>()
);

export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{ error: any }>()
);
