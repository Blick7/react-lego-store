import React from 'react';
import { Item } from '../../store/cart/types';
import CartItem from './CartItem';

import classes from './CartItems.module.scss';

type Props = {
  items: Item[];
};

const CartItems: React.FC<Props> = ({ items }) => {
  return (
    <div className={classes.wrapper}>
      {items.length !== 0 ? (
        <h3>Avaliable now</h3>
      ) : (
        <h3 className={classes.empty}>CART IS EMPTY</h3>
      )}
      {items.map((item) => {
        return <CartItem key={item.product.id} item={item} />;
      })}
    </div>
  );
};

export default CartItems;
