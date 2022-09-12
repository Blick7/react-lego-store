import React, { useEffect, useState } from 'react';
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
  const [navBtnIsActive, setNavBtnIsActive] = useState(false);
  const [navIsActive, setNavIsActive] = useState(false);
  const [headerBtnIsActive, setHeaderButtonIsActive] = useState(true);

  const signOutHandler = () => {
    dispatch(deleteUser());
    signOut(authentification);
    navigate('/home');
  };

  const navButtonHandler = (event: React.MouseEvent) => {
    setNavIsActive((prevValue) => !prevValue);
    setNavBtnIsActive((prevValue) => !prevValue);
    setHeaderButtonIsActive((prevValue) => !prevValue);
    event.stopPropagation();
  };

  const navBtnClass = navBtnIsActive
    ? `${classes['nav-button']} ${classes['nav-button--active']}`
    : `${classes['nav-button--disabled']}`;

  const headerBtnClass = headerBtnIsActive
    ? `${classes['nav-button']} ${classes['header-nav-button']}`
    : `${classes['nav-button--disabled']}`;

  const navClass = navIsActive
    ? `${classes.nav} ${classes['nav-active']}`
    : `${classes.nav}`;

  useEffect(() => {
    const bodyEventHandler = () => {
      setNavIsActive(false);
      setHeaderButtonIsActive(true);
      setNavBtnIsActive(false);
    };

    document.body.addEventListener('click', bodyEventHandler);
  }, []);

  return (
    <header
      className={classes.header}
      onClick={() => {
        setNavIsActive(false);
        setHeaderButtonIsActive(true);
        setNavBtnIsActive(false);
      }}
    >
      <div className={classes.wrapper}>
        <button className={headerBtnClass} onClick={navButtonHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <NavLink
          to="/home"
          className={classes.logo}
          onClick={() => {
            setNavIsActive(false);
            setHeaderButtonIsActive(true);
            setNavBtnIsActive(false);
          }}
        >
          <Logo />
        </NavLink>
        <nav
          className={navClass}
          onClick={(event: React.MouseEvent) => event.stopPropagation()}
        >
          <button className={navBtnClass} onClick={navButtonHandler}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={classes['ul-main']}>
            <li>
              <NavLink
                to="/home"
                className={classIsActive}
                onClick={() => {
                  setNavIsActive(false);
                  setHeaderButtonIsActive(true);
                  setNavBtnIsActive(false);
                }}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={classIsActive}
                onClick={() => {
                  setNavIsActive(false);
                  setHeaderButtonIsActive(true);
                  setNavBtnIsActive(false);
                }}
              >
                SHOP
              </NavLink>
            </li>
            <li>
              <a href="https://www.lego.com/en-us/service">CONTACT US</a>
            </li>
          </ul>
          <ul className={classes['ul-right']}>
            <li>
              <NavLink
                to="/shopping-cart"
                onClick={() => {
                  setNavIsActive(false);
                  setHeaderButtonIsActive(true);
                  setNavBtnIsActive(false);
                }}
              >
                <IconButton className={classes.wishlist} sx={{ padding: '0' }}>
                  <FavoriteBorderIcon sx={{ fontSize: 30, color: 'success' }} />
                </IconButton>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shopping-cart"
                onClick={() => {
                  setNavIsActive(false);
                  setHeaderButtonIsActive(true);
                  setNavBtnIsActive(false);
                }}
              >
                <IconButton className={classes.cart} sx={{ padding: '0' }}>
                  <ShoppingCartIcon sx={{ fontSize: 30, color: 'success' }} />
                </IconButton>
              </NavLink>
            </li>
            {!userStore.user && (
              <li>
                <NavLink
                  to="/signin"
                  onClick={() => {
                    setNavIsActive(false);
                    setHeaderButtonIsActive(true);
                    setNavBtnIsActive(false);
                  }}
                >
                  <Button variant="contained" color="error">
                    Sign In
                  </Button>
                </NavLink>
              </li>
            )}
            {!userStore.user && (
              <li>
                <NavLink
                  to="/register"
                  onClick={() => {
                    setNavIsActive(false);
                    setHeaderButtonIsActive(true);
                    setNavBtnIsActive(false);
                  }}
                >
                  <Button>Register</Button>
                </NavLink>
              </li>
            )}
            {userStore.user && (
              <li>
                <NavLink
                  to="/profile"
                  onClick={() => {
                    setNavIsActive(false);
                    setHeaderButtonIsActive(true);
                    setNavBtnIsActive(false);
                  }}
                >
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
                <NavLink
                  to="/signout"
                  onClick={() => {
                    setNavIsActive(false);
                    setHeaderButtonIsActive(true);
                    setNavBtnIsActive(false);
                  }}
                >
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
