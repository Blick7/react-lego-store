import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import ShopFilters from './ShopFilters';
import ShopItem from './ShopItem';

import Box from '@mui/material/Box';

import classes from './Shop.module.scss';

import { IinitialProducts } from '../../store/products/types';
import filterProducts from '../../utils/filterProducts';

const Shop = () => {
  let productsState = useSelector((state: RootState) => state.products);
  const filters = useSelector((state: RootState) => state.filter);
  const [products, setProducts] = useState<IinitialProducts[]>(productsState);

  useEffect(() => {
    if (
      Object.values(filters.categories).every(
        (category) => category.length === 0
      )
    ) {
      setProducts(productsState);
      return;
    }

    productsState = filterProducts(productsState, filters);

    setProducts(productsState);
  }, [filters]);

  return (
    <section style={{ margin: '2rem 0', padding: '0 1rem' }}>
      <div style={{ display: 'flex' }}>
        <ShopFilters />
        <Box sx={{ flexGrow: 1 }}>
          <ul className={classes.items}>
            {products.map((item) => (
              <ShopItem key={item.id} item={item} />
            ))}
          </ul>
        </Box>
      </div>
    </section>
  );
};

export default Shop;
