import React from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import LinkButton from '../../UI/LinkButton/LinkButton';

import classes from './KeepInTouch.module.scss';

const KeepInTouch = () => {
  return (
    <section className={classes.container}>
      <div>
        <img
          src="https://www.lego.com/cdn/cs/set/assets/blt8c7ec696474ed641/Grey-Email-Signup-Hero-Standard-1.jpg?fit=crop&format=webply&quality=80&width=1600&height=500&dpr=1"
          alt="keep-in-touch"
        />
        <div className={classes['banner-text']}>
          <h2>Keep in touch</h2>
          <span>
            Sign up to receive communications from LEGO® Marketing and be the
            first to know about new sets, product updates, promotions and much
            more
          </span>
          <LinkButton text={'Sign up'} />
        </div>
      </div>
    </section>
  );
};

export default KeepInTouch;
