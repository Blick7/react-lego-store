import React, { useEffect } from 'react';
import Shop from '../Shop/Shop';

const ShopPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Shop />;
};

export default ShopPage;
