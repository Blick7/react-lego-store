import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/lego-logo.svg';
import classes from './MainNavigation.module.scss';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';

const MainNavigation: React.FC = () => {
  const classIsActive = (navData: { isActive: boolean }) =>
    navData.isActive ? classes.active : classes['main-list-item'];

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <nav>
          <NavLink to="/home" className={classes.logo}>
            <Logo />
          </NavLink>
          <ul className={classes['ul-main']}>
            <li>
              <NavLink to="/home" className={classIsActive}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={classIsActive}>
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className={classIsActive}>
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <ul className={classes['ul-right']}>
            <li>
              <NavLink to="/shopping-cart">
                <IconButton>
                  <FavoriteBorderIcon sx={{ fontSize: 30, color: 'success' }} />
                </IconButton>
              </NavLink>
            </li>
            <li>
              <NavLink to="/shopping-cart">
                <IconButton>
                  <ShoppingCartIcon sx={{ fontSize: 30, color: 'success' }} />
                </IconButton>
              </NavLink>
            </li>
            <li>
              <Button variant="contained" color="error">
                Sign In
              </Button>
            </li>
            <li>
              <Button>Register</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
