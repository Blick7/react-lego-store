import React from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const DrawStarsRating = (props: { rating: number }) => {
  const array = [];
  let { rating } = props;
  // console.log(rating);
  for (let i = 1; i <= 5; i++) {
    if (i === Math.floor(rating) + 1 && rating - Math.floor(rating) !== 0) {
      array.push(
        <StarHalfIcon key={i} style={{ color: 'rgb(255, 208, 0)' }} />
      );
      rating = Math.floor(rating);
    } else if (i > Math.floor(rating)) {
      array.push(
        <StarOutlineIcon key={i} style={{ color: 'rgb(255, 208, 0)' }} />
      );
    } else
      array.push(<StarIcon key={i} style={{ color: 'rgb(255, 208, 0)' }} />);
  }
  return <div>{array}</div>;
};

export default DrawStarsRating;
