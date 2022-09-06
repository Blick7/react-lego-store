import React, { useRef, useState } from 'react';

import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import GppGoodIcon from '@mui/icons-material/GppGood';

import classes from './OrderSummary.module.scss';

type Props = {
  quantity: number;
  amount: number;
};

const OrderSummary: React.FC<Props> = ({ quantity, amount }) => {
  const inputPromoRef = useRef<HTMLInputElement>();
  const [buttonIsActive, setButtonIsActive] = useState(true);
  let promoBtnClass = buttonIsActive ? `${classes['btn--disabled']}` : '';

  amount = +amount.toFixed(3);

  const promoChangeHandler = () => {
    if (
      inputPromoRef.current?.value !== undefined &&
      inputPromoRef.current?.value.trim().length > 0
    ) {
      setButtonIsActive(false);
    } else {
      setButtonIsActive(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Enter a Promo Code</h2>
        <p>You can add a VIP Discount Code or Promo Code here</p>
        <div className={classes['code-input']}>
          <TextField
            label="Enter code"
            variant="filled"
            inputRef={inputPromoRef}
            onChange={promoChangeHandler}
            sx={{ backgroundColor: 'white !important' }}
          />
          <button disabled={buttonIsActive} className={promoBtnClass}>
            Apply
          </button>
        </div>
      </div>
      <div className={classes['order-summary']}>
        <h2>Order Summary</h2>
        <p>Enter a ZIP code to estimate tax and delivery</p>
        <div className={classes['code-input']}>
          <TextField
            label="Enter code"
            variant="filled"
            sx={{ backgroundColor: 'white !important' }}
          />
          <button>Apply</button>
        </div>
        <div className={classes['order-description']}>
          <span>Order value ({quantity}) items</span>
          <span>${amount}</span>
        </div>
        <div className={classes['order-shipping']}>
          <span>Congratulations you qualify for FREE shipping</span>
          <CheckIcon />
        </div>
        <div className={classes['order-total']}>
          <span>Order Total</span>
          <span>${amount}</span>
        </div>
        <button className={classes['order-button']}>
          <GppGoodIcon /> <span>Checkout Securely</span>
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
