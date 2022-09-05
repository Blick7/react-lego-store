import React, { useRef, useState } from 'react';
import DrawStarsRating from '../../../UI/DrawStarsRating';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionIcon from '@mui/icons-material/Description';
import classes from './ProductOverview.module.scss';

type Props = {
  rating: number;
  featured: string;
  title: string;
  price: number;
  avaliability: string;
  id: string;
};

const ProductOverview: React.FC<Props> = ({
  rating,
  featured,
  title,
  price,
  avaliability,
  id,
}) => {
  const [inputValue, setInputValue] = useState(1);
  const featuredClass = featured.length !== 0 ? classes.featured : '';
  const [removeBtnActive, setRemoveBtnActive] = useState(false);
  const [addBtnActive, setAddBtnActive] = useState(true);

  const removeBtnClass = removeBtnActive
    ? `${classes.button}`
    : `${classes.button} ${classes['btn-disabled']}`;
  const addBtnClass = addBtnActive
    ? `${classes.button}`
    : `${classes.button} ${classes['btn-disabled']}`;

  const min = 1;
  const max = 10;

  const removeItemHandler = () => {
    if (inputValue === min) {
      setRemoveBtnActive(false);
      return;
    }
    if (inputValue !== null) {
      setInputValue((prevValue) => prevValue - 1);
      if (inputValue === min + 1) {
        setRemoveBtnActive(false);
      }
      setAddBtnActive(true);
    }
  };

  const addItemHandler = () => {
    if (inputValue === max) {
      setAddBtnActive(false);
      return;
    }
    if (inputValue !== null) {
      setInputValue((prevValue) => prevValue + 1);

      if (inputValue >= max - 1) {
        setAddBtnActive(false);
      }
      setRemoveBtnActive(true);
    }
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > max) {
      setInputValue(max);
      return;
    } else if (Number(event.target.value) < min) {
      setInputValue(min);
    }
    setInputValue(Number(event.target.value));
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select();
  };

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
      <span className={classes.avaliability}>{avaliability}</span>
      <div className={classes.quantity}>
        <button className={removeBtnClass} onClick={removeItemHandler}>
          <RemoveIcon />
        </button>
        <input
          type="number"
          value={inputValue}
          onChange={inputChangeHandler}
          onFocus={handleFocus}
        />
        <button className={addBtnClass} onClick={addItemHandler}>
          <AddIcon />
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2rem',
        }}
      >
        <button className={classes['cart-add-button']}>Add to Cart</button>
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
