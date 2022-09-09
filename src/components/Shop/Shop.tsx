import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchProducts } from '../../store/products/productsSlice';

import ShopFilters from './ShopFilters';
import ShopItem from './ShopItem';

import Box from '@mui/material/Box';

import classes from './Shop.module.scss';

import { IinitialProducts } from '../../store/products/types';
import filterProducts from '../../utils/filterProducts';

const Shop = () => {
  const dispatch = useDispatch<AppDispatch>();

  // when app is mounted
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const filters = useSelector((state: RootState) => state.filter);
  let productsState = useSelector((state: RootState) => state.products);
  const [products, setProducts] = useState<IinitialProducts[]>(productsState);

  console.log(productsState);

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

  console.log(products);

  return (
    <section style={{ margin: '2rem 0', padding: '0 1rem' }}>
      <div style={{ display: 'flex' }}>
        <ShopFilters />
        <Box sx={{ flexGrow: 1 }}>
          <ul className={classes.items}>
            {products.map((product) => (
              <ShopItem key={product.id} product={product} />
            ))}
          </ul>
        </Box>
      </div>
    </section>
  );
};

export default Shop;
