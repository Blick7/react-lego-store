import React from 'react';
import DrawStarsRating from '../../../UI/DrawStarsRating';

import classes from './ProductOverview.module.scss';

type Props = {
  rating: number;
  featured: string;
};

const ProductOverview: React.FC<Props> = ({ rating, featured }) => {
  return (
    <div className={classes.overview}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span className={classes.featured}>{featured}</span>
        <DrawStarsRating rating={rating} />
      </div>
    </div>
  );
};

export default ProductOverview;
