import React from 'react';

import classes from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/svg/lego-logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/svg/facebook-895fba5a20c4facacb9655dade1d256c.svg';
import { ReactComponent as TwitterLogo } from '../../assets/svg/twitter-1e56a60f172faa3c81bfdd93bc099416.svg';
import { ReactComponent as InstagramLogo } from '../../assets/svg/instagram-e47f0d4b15ff76083b415be91e96f43b.svg';
import { ReactComponent as YoutubeLogo } from '../../assets/svg/youtube-c51b2c62583921aae813fdc55df5f9d2.svg';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.group}>
            <div className={classes.logo}>
              <Logo />
            </div>
            <button className={classes['region-selector']}>
              <LocationOnIcon />
              Unites States
            </button>
            <a href="/">Gift Cards</a>
            <a href="/">LEGO Catalogs</a>
            <a href="/">Find a LEGO Store</a>
          </div>
          <div className={classes.group}>
            <h4>ABOUT US</h4>
            <ul>
              <li>
                <a href="/">About the LEGO Group</a>
              </li>
              <li>
                <a href="/">LEGO® News</a>
              </li>
              <li>
                <a href="/">Sustainabilityp</a>
              </li>
              <li>
                <a href="/">Supply Chain Transparency</a>
              </li>
              <li>
                <a href="/">LEGO Product Certification</a>
              </li>
              <li>
                <a href="/">LEGO Jobs</a>
              </li>
              <li>
                <a href="/">LEGO Compliance Line</a>
              </li>
            </ul>
          </div>
          <div className={classes.group}>
            <h4>SUPPORT</h4>
            <ul>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Find Building Instructions</a>
              </li>
              <li>
                <a href="/">Replacement Parts</a>
              </li>
              <li>
                <a href="/">Shipping and Returns</a>
              </li>
              <li>
                <a href="/">Payment Methods</a>
              </li>
              <li>
                <a href="/">Terms &#38; Conditions</a>
              </li>
              <li>
                <a href="/">Product Recalls</a>
              </li>
            </ul>
          </div>
          <div className={classes.group}>
            <h4>ATTRACTIONS</h4>
            <ul>
              <li>
                <a href="/">LEGO® House</a>
              </li>
              <li>
                <a href="/">LEGOLAND® Parks</a>
              </li>
              <li>
                <a href="/">LEGOLAND Discovery Centers</a>
              </li>
            </ul>
          </div>
          <div className={classes.group}>
            <h4>MORE FROM US</h4>
            <ul>
              <li>
                <a href="/">LEGO® LIFE</a>
              </li>
              <li>
                <a href="/">LEGO Education</a>
              </li>
              <li>
                <a href="/">LEGO Ideas</a>
              </li>
              <li>
                <a href="/">LEGO Foundation</a>
              </li>
              <li>
                <a href="/">Affiliate Program</a>
              </li>
              <li>
                <a href="/">Student Offers</a>
              </li>
              <li>
                <a href="/">LEGO® Braille Bricks</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.follow}>
          <div className={classes.subscribe}>
            <span>SUBSCRIBE TO LEGO® SHOP EMAILS</span>
            <form>
              <label htmlFor="email" />
              <input type="email" id="email" placeholder="Your email address" />
              <button className={classes['subscribe-btn']}>
                <ArrowForwardIosIcon />
              </button>
            </form>
          </div>
          <div className={classes['follow-us']}>
            <span>FOLLOW US</span>
            <div>
              <a href="https://www.facebook.com/LEGO/">
                <FacebookLogo />
              </a>
              <a href="https://www.facebook.com/LEGO/">
                <TwitterLogo />
              </a>
              <a href="https://www.facebook.com/LEGO/">
                <InstagramLogo />
              </a>
              <a href="https://www.facebook.com/LEGO/">
                <YoutubeLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes['notes-wrapper']}>
          <ul>
            <li>
              <a href="https://www.lego.com/en-us/legal/notices-and-policies/privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.lego.com/en-us/cookie-policy"> Cookies </a>
            </li>
            <li>
              <a href="https://www.lego.com/en-us/legal/notices-and-policies/legal-notice">
                Legal Notice
              </a>
            </li>
            <li>
              <a href="https://www.lego.com/en-us/legal/notices-and-policies/legal-notice">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="https://www.lego.com/en-us/sustainability/children/digital-child-safety">
                Digital Wellbeing
              </a>
            </li>
            <li>
              <a href="https://www.lego.com/en-us/page/accessibility">
                Accessibility
              </a>
            </li>
            <li>
              <a href="https://www.lego.com/en-us/page/accessibility">
                Cookie Settings
              </a>
            </li>
            <li>
              <a href="https://www.lego.com/en-us/page/accessibility">
                Do Not Sell My Personal Information
              </a>
            </li>
          </ul>
          <p>
            LEGO System A/S, DK-7190 Billund, Denmark. Must be 18 years or older
            to purchase online. LEGO, the LEGO logo, the Minifigure, DUPLO,
            LEGENDS OF CHIMA, NINJAGO, BIONICLE, MINDSTORMS and MIXELS are
            trademarks and copyrights of the LEGO Group. ©2022 The LEGO Group.
            All rights reserved. Use of this site signifies your agreement to
            the terms of use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
