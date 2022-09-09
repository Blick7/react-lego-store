import React from 'react';

import classes from './SliderAddButton.module.scss';

type Props = {
  onClick: () => void;
};

const SliderAddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      Add to Cart
    </button>
  );
};

export default SliderAddButton;
