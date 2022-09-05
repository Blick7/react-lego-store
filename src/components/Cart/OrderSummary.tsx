import React, { useRef, useState } from 'react';

import TextField from '@mui/material/TextField';

import classes from './OrderSummary.module.scss';

const OrderSummary = () => {
  const inputPromoRef = useRef<HTMLInputElement>();
  const [buttonIsActive, setButtonIsActive] = useState(true);
  let promoBtnClass = buttonIsActive ? `${classes['btn--disabled']}` : '';

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
          />
          <button disabled={buttonIsActive} className={promoBtnClass}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
