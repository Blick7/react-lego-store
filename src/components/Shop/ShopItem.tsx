import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../store/cart/cartSlice';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import classes from './ShopItem.module.scss';
import DrawStarsRating from '../../UI/DrawStarsRating';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

type Product = {
  id: string;
  title: string;
  imgUrl: string;
  bigImgUrl: string;
  rating: number;
  price: number;
  featured: string;
  pieces: number;
  ages: string;
  productType: string;
  theme: string;
  avaliability: string;
};

interface IProduct {
  product: Product;
}

const ShopItem: React.FC<IProduct> = ({ product }) => {
  const featuredClass = product.featured.length !== 0 ? classes.featured : '';
  const dispatch = useDispatch();
  const addProductHandler = () => {
    if (
      product.avaliability === 'Out of Stock' ||
      product.avaliability === 'Coming Soon'
    ) {
      return;
    }
    dispatch(addItem({ product, quantity: 1 }));
    toast.success(`${product.title} added to the cart`, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  let buttonClass;
  if (
    product.avaliability === 'Out of Stock' ||
    product.avaliability === 'Coming Soon'
  ) {
    buttonClass = `${classes['not-avaliable-button']}`;
  } else {
    buttonClass = `${classes.button}`;
  }

  return (
    <li className={classes.item}>
      <Link to={`/product/${product.id}`}>
        <div className={classes.image}>
          <img src={product.imgUrl} alt={product.title} />
        </div>
      </Link>
      <div className={classes.wishlist}>
        <FavoriteBorderIcon />
        Add to wishlist
      </div>
      <div className={featuredClass}>{product.featured}</div>
      <div className={classes.group}>
        <div className={classes.additional}>
          <a href="/">
            <div>{product.title}</div>
          </a>
          <div>
            <DrawStarsRating rating={product.rating} />
          </div>
          <div className={classes.price}>{'$' + product.price}</div>
        </div>
        <button className={buttonClass} onClick={addProductHandler}>
          {product.avaliability === 'Available now'
            ? 'Add to Cart'
            : product.avaliability}
        </button>
      </div>
    </li>
  );
};

export default ShopItem;
