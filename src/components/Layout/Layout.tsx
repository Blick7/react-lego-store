import React from 'react';

import MainNavigation from './MainNavigation';
import classes from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.container}>{children}</main>
    </div>
  );
};

export default Layout;
