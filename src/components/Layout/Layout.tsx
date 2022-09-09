import React from 'react';

import MainNavigation from './MainNavigation';
import Footer from './Footer';

import classes from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
