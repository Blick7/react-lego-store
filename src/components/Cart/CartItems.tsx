import React from 'react';
import { Item } from '../../store/cart/types';
import CartItem from './CartItem';

import classes from './CartItems.module.scss';

type Props = {
  items: Item[];
};

const CartItems: React.FC<Props> = ({ items }) => {
  console.log(items);
  return (
    <div className={classes.wrapper}>
      <h3>Avaliable now</h3>
      {items.map((item) => {
        return <CartItem key={item.product.id} item={item} />;
      })}
    </div>
  );
};

export default CartItems;
