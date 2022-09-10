import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchProducts } from '../../store/products/productsSlice';

import ShopFilters from './ShopFilters';
import ShopItem from './ShopItem';

import Box from '@mui/material/Box';

import classes from './Shop.module.scss';

import { Product } from '../../store/products/types';
import filterProducts from '../../utils/filterProducts';
import LoadingSpinner from '../../UI/LoadingSpinner';

const Shop = () => {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.filter);
  let productsState = useSelector((state: RootState) => state.products);
  const [products, setProducts] = useState<Product[]>(
    Object.values(productsState.products)
  );

  const status = productsState.status;

  useEffect(() => {
    if (
      Object.values(filters.categories).every(
        (category) => category.length === 0
      )
    ) {
      setProducts(Object.values(productsState.products));
      return;
    }

    let products = Object.values(productsState.products);
    products = filterProducts(productsState.products, filters);
    setProducts(products);
  }, [filters]);

  // when app is mounted
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section style={{ margin: '2rem 0', padding: '0 1rem' }}>
      <div style={{ display: 'flex' }}>
        <ShopFilters />
        <Box sx={{ flexGrow: 1 }}>
          {status === 'loading' && <LoadingSpinner />}
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
