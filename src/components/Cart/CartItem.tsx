import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/cart/cartSlice';
import { IinitialProducts } from '../../store/products/types';
import QuantitySelector from '../../UI/QuantitySelector/QuantitySelector';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import classes from './CartItem.module.scss';
import { Product } from '../../store/cart/types';

type Props = {
  item: Product;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { imgUrl, title, price } = item.product;
  const dispatch = useDispatch();
  return (
    <div className={classes.item}>
      <div className={classes.image}>
        <img src={imgUrl} alt={title} />
      </div>
      <div className={classes.details}>
        <h3>{title}</h3>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '25rem',
            marginTop: '3rem',
          }}
        >
          <div>{price}</div>
          <QuantitySelector value={item.quantity} />
        </div>
      </div>
      <div
        className={classes.remove}
        onClick={() => dispatch(removeItem(item))}
      >
        <DeleteOutlineIcon />
      </div>
    </div>
  );
};

export default CartItem;
