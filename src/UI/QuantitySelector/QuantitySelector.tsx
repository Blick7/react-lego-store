import React, { useState } from 'react';

import classes from './QuantitySelector.module.scss';

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

type Props = {
  value: number;
  actions?: (type: string) => void;
  getValue?: (num: number) => void;
};

const QuantitySelector: React.FC<Props> = ({ value, actions, getValue }) => {
  const [inputValue, setInputValue] = useState(value);
  const [removeBtnActive, setRemoveBtnActive] = useState(value > 1);
  const [addBtnActive, setAddBtnActive] = useState(value <= 10);

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
        if (getValue && inputValue) getValue(inputValue - 1);

        if (actions) actions('REMOVE_ITEM');
      } else {
        setAddBtnActive(true);
        if (getValue && inputValue) getValue(inputValue - 1);

        if (actions) actions('REMOVE_ITEM');
      }
    }
  };

  const addItemHandler = () => {
    if (inputValue === max) {
      setAddBtnActive(false);

      return;
    }
    if (inputValue <= 10) {
      setInputValue((prevValue) => prevValue + 1);
    }

    if (inputValue >= max - 1) {
      setAddBtnActive(false);
      if (getValue && inputValue) getValue(inputValue + 1);

      if (actions) actions('ADD_ITEM');
    } else {
      setRemoveBtnActive(true);
      if (getValue && inputValue) getValue(inputValue + 1);

      if (actions) actions('ADD_ITEM');
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
  );
};

export default QuantitySelector;
