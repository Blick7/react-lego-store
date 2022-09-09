import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { deleteUser } from '../../store/user/userSlice';
import { app } from '../../firebase-config';
import { ReactComponent as Logo } from '../../assets/svg/lego-logo.svg';

import classes from './MainNavigation.module.scss';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MainNavigation: React.FC = () => {
  const classIsActive = (navData: { isActive: boolean }) =>
    navData.isActive ? classes.active : classes['main-list-item'];
  const userStore = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authentification = getAuth(app);

  const signOutHandler = () => {
    dispatch(deleteUser());
    signOut(authentification);
    navigate('/home');
  };

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
              <a href="https://www.lego.com/en-us/service">CONTACT US</a>
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
            {!userStore.user && (
              <li>
                <NavLink to="/signin">
                  <Button variant="contained" color="error">
                    Sign In
                  </Button>
                </NavLink>
              </li>
            )}
            {!userStore.user && (
              <li>
                <NavLink to="/register">
                  <Button>Register</Button>
                </NavLink>
              </li>
            )}
            {userStore.user && (
              <li>
                <NavLink to="/profile">
                  <IconButton>
                    <AccountCircleIcon
                      sx={{ fontSize: 30, color: 'success' }}
                    />
                  </IconButton>
                </NavLink>
              </li>
            )}
            {userStore.user && (
              <li>
                <NavLink to="/signout">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={signOutHandler}
                  >
                    Sign Out
                  </Button>
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
