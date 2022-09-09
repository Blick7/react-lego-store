import React from 'react';

import classes from './MotionBanner.module.scss';

import LinkButton from '../../UI/LinkButton/LinkButton';
import { Link } from 'react-router-dom';

const MotionBanner = () => {
  return (
    <section className={classes['motion-banner']}>
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
          <Link to="/shop">
            <LinkButton text={'Shop now'} />
          </Link>
          <a href="https://www.lego.com/en-us/themes/super-mario/about?icmp=TH-TAB-Standard-MAR_In_page_navigation_About-TH-MAR-KTDMH8H10J">
            <LinkButton text={'Learn more'} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MotionBanner;
