import React from 'react';

import { Button } from '@mui/material';
import classes from './MotionBanner.module.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// @mui/styles not compatible with react 18 (https://github.com/mui/material-ui/issues/32142)

const MotionBanner = () => {
  return (
    <div className={classes['motion-banner']}>
      <video autoPlay={true} loop={true}>
        <source
          src="https://www.lego.com/cdn/cs/set/assets/blt4be4ad4d9a157275/1748-LSM-202208-Home-Hero-Standard-Large-Peach.mp4"
          type="video/mp4"
        />
      </video>
      <div className={classes['banner-text']}>
        <h2>It's LEGO® Peach™ time</h2>
        <span>
          Level up to all-new adventures in the LEGO® Super Mario™ universe with
          LEGO® Peach™.
        </span>
        <div>
          <Button
            className={classes.button}
            variant="contained"
            style={{ backgroundColor: '#000' }}
          >
            Shop Now <ArrowForwardIosIcon />
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            style={{ backgroundColor: '#000' }}
          >
            Learn More <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MotionBanner;
