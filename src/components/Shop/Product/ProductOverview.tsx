import React, { useState } from 'react';

import { addItem } from '../../../store/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import DrawStarsRating from '../../../UI/DrawStarsRating';
import QuantitySelector from '../../../UI/QuantitySelector/QuantitySelector';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionIcon from '@mui/icons-material/Description';

import classes from './ProductOverview.module.scss';
import { Product } from '../../../store/products/types';
import { RootState } from '../../../store/store';

type Props = {
  product: Product;
};

const ProductOverview: React.FC<Props> = ({ product }) => {
  const { featured, rating, title, price, avaliability, id } = product;
  const featuredClass = featured.length !== 0 ? classes.featured : '';
  const [productQuantity, setProductQuantity] = useState(1);
  const cartState = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const itemFromCart = cartState.items.filter(
    (item) => item.product.id === product.id
  );
  const valueHandler = (num: number) => {
    setProductQuantity(num);
  };

  const addProductHandler = () => {
    const itemQuantity = itemFromCart[0]?.quantity;
    // 10 - is max quantity for one item

    if (itemQuantity > 10) {
      return;
    } else if (itemQuantity + productQuantity > 10) {
      return;
    } else {
      dispatch(addItem({ product, quantity: productQuantity }));
    }
  };

  let avaliabilityClass;
  if (avaliability === 'Out of Stock')
    avaliabilityClass = `${classes['out-of-stock']}`;
  else if (avaliability === 'Coming Soon')
    avaliabilityClass = `${classes['coming-soon']}`;
  else avaliabilityClass = `${classes.avaliability}`;
  // Coming Soon
  return (
    <div className={classes.overview}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className={featuredClass}>{featured}</span>
        <DrawStarsRating rating={rating} />
      </div>
      <h3>{title}</h3>
      <div className={classes.price}>${price}</div>
      <span className={avaliabilityClass}>{avaliability}</span>
      <div style={{ marginTop: '1.5rem' }}>
        <QuantitySelector value={1} getValue={valueHandler} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        <button
          className={classes['cart-add-button']}
          onClick={addProductHandler}
        >
          Add to Cart
        </button>
        <button className={classes.wishlist}>
          <FavoriteBorderIcon />
        </button>
      </div>

      <div className={classes['product-accessory']}>
        <button className={classes['product-accessory__button']}>
          <span>
            <LocationOnIcon />
          </span>
          <span> Check Store Stock </span>
          <KeyboardArrowRightIcon />
        </button>
        <button className={classes['product-accessory__button']}>
          <span>
            <LocalShippingIcon />
          </span>
          <span> Deliveries and Returns </span>
          <KeyboardArrowRightIcon />
        </button>
        <a
          href={`https://www.lego.com/en-us/service/buildinginstructions/${id}`}
          className={classes['product-accessory__button']}
        >
          <span>
            <DescriptionIcon />
          </span>
          <span> Deliveries and Returns </span>
          <KeyboardArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default ProductOverview;
