import React from 'react';
import { IinitialProducts } from '../../store/products/types';
import QuantitySelector from '../../UI/QuantitySelector/QuantitySelector';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import classes from './CartItem.module.scss';

type Props = {
  item: IinitialProducts;
};

const CartItem: React.FC<Props> = ({ item }) => {
  const { imgUrl, title, price } = item;

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
          <QuantitySelector value={1} />
        </div>
      </div>
      <div className={classes.remove}>
        <DeleteOutlineIcon />
      </div>
    </div>
  );
};

export default CartItem;
