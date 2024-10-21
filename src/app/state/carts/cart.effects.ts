import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartService } from '../../services/cart.service';
import { loadCart, loadCartSuccess, loadCartFailure } from './cart.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CartEffects {
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCart),
      mergeMap((action) =>
        this.cartService.getSingleCart(action.cartId).pipe(
          map((cart) => loadCartSuccess({ cart })),
          catchError((error) => of(loadCartFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private cartService: CartService) {}
}
