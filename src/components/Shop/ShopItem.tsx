import React from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Grid from '@mui/material/Unstable_Grid2';

import classes from './ShopItem.module.scss';
import DrawStarsRating from '../../UI/DrawStarsRating';

type Item = {
  id: string;
  title: string;
  imgUrl: string;
  rating: number;
  price: string;
  featured: string;
  pieces: number;
  ages: string;
};

interface IItem {
  item: Item;
}

const ShopItem: React.FC<IItem> = ({ item }) => {
  return (
    // <Grid xs={2} sm={4} md={4} style={{ height: '20rem', justifyContent: 'center', alignItems: 'center'}} container>
    <li className={classes.item}>
      {/* <div style={{ display: 'flex', padding: '1rem' }}>
        <img
          src={item.imgUrl}
          alt={item.title}
          style={{ width: '100%', objectFit: 'contain' }}
        />
      </div> */}
      <a href="/">
        <div className={classes.image}>
          <img src={item.imgUrl} alt={item.title} />
        </div>
      </a>
      <div className={classes.wishlist}>
        <FavoriteBorderIcon />
        Add to wishlist
      </div>
      <div className={classes.group}>
        <div className={classes.additional}>
          <a href="/">
            <h4>{item.title}</h4>
          </a>
          <div>
            <DrawStarsRating rating={item.rating} />
          </div>
          <div className={classes.price}>{item.price}</div>
        </div>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </li>
    // </Grid>
  );
};

export default ShopItem;
