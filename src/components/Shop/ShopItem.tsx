import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem } from '../../store/cart/cartSlice';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import classes from './ShopItem.module.scss';
import DrawStarsRating from '../../UI/DrawStarsRating';
import { Link } from 'react-router-dom';

type Product = {
  id: string;
  title: string;
  imgUrl: string;
  rating: number;
  price: number;
  featured: string;
  pieces: number;
  ages: string;
};

interface IProduct {
  product: Product;
}

const ShopItem: React.FC<IProduct> = ({ product }) => {
  const featuredClass = product.featured.length !== 0 ? classes.featured : '';
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(addItem({ product, quantity: 1 }));
  };
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
            <h4>{product.title}</h4>
          </a>
          <div>
            <DrawStarsRating rating={product.rating} />
          </div>
          <div className={classes.price}>{'$' + product.price}</div>
        </div>
        <button className={classes.button} onClick={addProductHandler}>
          Add to Cart
        </button>
      </div>
    </li>
  );
};

export default ShopItem;
