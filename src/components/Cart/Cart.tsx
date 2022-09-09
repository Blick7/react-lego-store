import React from 'react';
import { useSelector } from 'react-redux';
import ICart from '../../store/cart/types';
import { IinitialProducts } from '../../store/products/types';
import { RootState } from '../../store/store';

import CartItems from './CartItems';
import OrderSummary from './OrderSummary';

import classes from './Cart.module.scss';

const Cart = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  return (
    <section className={classes.container}>
      <h1>My Cart ({cartState.totalQuantity})</h1>
      <div className={classes.wrapper}>
        <CartItems items={cartState.items} />
        <OrderSummary
          quantity={cartState.totalQuantity}
          amount={cartState.totalAmount}
        />
      </div>
    </section>
  );
};

export default Cart;
