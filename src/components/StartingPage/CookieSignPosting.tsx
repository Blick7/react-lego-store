import React from 'react';

import classes from './CookieSignPosting.module.scss';

const CookieSignPosting = () => {
  return (
    <div className={classes.container}>
      <div className={classes.cookieGuy}>
        <img
          src="https://www.lego.com/_next/static/images/cookieguy-a8400ece3d416842cb83d9f1efc22662.png"
          alt="cookie-guy"
        />
      </div>
      <div className={classes.wrapper}>
        <div>
          <h3>
            Help us build the most awesome personalized experience for you
          </h3>
          <span>
            Help us build the most awesome personalized experience for you! Give
            us your permission to use site cookies and we'll create you an
            experience you're sure to love!
          </span>
          <div>
            <button>Let's do this</button>
            <button>Tell me more</button>
          </div>
        </div>
        <div className={classes.cookie}>
          <img
            src="https://www.lego.com/_next/static/images/cookies-afb23abdf31dc35a6f446c474ef33678.png"
            alt="cookies"
          />
        </div>
      </div>
    </div>
  );
};

export default CookieSignPosting;
