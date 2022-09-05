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
  const inputRef = useRef<HTMLInputElement>(null);
  const featuredClass = featured.length !== 0 ? classes.featured : '';
  const [removeBtnActive, setRemoveBtnActive] = useState(false);
  const [addBtnActive, setAddBtnActive] = useState(true);

  const removeBtnClass = removeBtnActive
    ? `${classes.button}`
    : `${classes.button} ${classes['btn-disabled']}`;
  const addBtnClass = addBtnActive
    ? `${classes.button}`
    : `${classes.button} ${classes['btn-disabled']}`;

  const removeItemHandler = () => {
    if (inputRef.current?.value === '1') {
      setRemoveBtnActive(false);
      return;
    }
    if (inputRef.current !== null) {
      inputRef.current.value = (+inputRef.current.value - 1).toString();
      if (inputRef.current.value === '1') {
        setRemoveBtnActive(false);
      }
      setAddBtnActive(true);
    }
  };

  const addItemHandler = () => {
    if (inputRef.current?.value === '10') {
      return;
    }
    if (inputRef.current !== null) {
      inputRef.current.value = (+inputRef.current.value + 1).toString();
      if (inputRef.current.value === '10') {
        setAddBtnActive(false);
      }
      setRemoveBtnActive(true);
    }
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
        <input type="number" defaultValue={1} ref={inputRef} />
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
