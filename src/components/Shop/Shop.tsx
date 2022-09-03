import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../store/products/productsSlice';
import { RootState } from '../../store/store';

import ShopFilters from './ShopFilters';
import ShopItem from './ShopItem';

import Box from '@mui/material/Box';

import classes from './Shop.module.scss';

import { IinitialProducts } from '../../store/products/types';
// import { Categories } from '../../store/filter/types';

const items = [
  {
    id: '75336',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: '$99.99',
    featured: 'New',
    pieces: 924,
    ages: '9+',
  },
  {
    id: '75331',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt959c93653cb028e3/75335.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: '$99.99',
    featured: 'New',
    pieces: 924,
    ages: '9+',
  },
  {
    id: '75332',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: '$99.99',
    featured: 'New',
    pieces: 924,
    ages: '9+',
  },
  {
    id: '75333',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: '$99.99',
    featured: 'New',
    pieces: 924,
    ages: '9+',
  },
  {
    id: '75334',
    title: 'Inquisitor Transport Scythe™ Inquisitor Transport ',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: '$99.99',
    featured: 'New',
    pieces: 924,
    ages: '9+',
  },
  {
    id: '75339',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: '$99.99',
    featured: 'New',
    pieces: 924,
    ages: '9+',
  },
];

const Shop = () => {
  let productsState = useSelector((state: RootState) => state.products);
  const filters = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IinitialProducts[]>(productsState);

  useEffect(() => {
    // console.log(filters);
    // console.log(products);

    if (
      Object.values(filters.categories).every(
        (category) => category.length === 0
      )
    ) {
      console.log(filters.categories);
      setProducts(productsState);
      return;
    }

    // filter PRODUCT_TYPE
    if (filters.categories.PRODUCT_TYPE.length !== 0) {
      productsState = productsState.filter((product) =>
        filters.categories.PRODUCT_TYPE.includes(product.PRODUCT_TYPE)
      );
    }

    // filter PRICE
    console.log(filters.categories);

    let priceMin = 0;
    let priceMax = 0;

    filters.categories.PRICE.forEach((price) => {
      let min = +price.split('-')[0].replace(/[^0-9]/g, '');
      let max;
      if (price.split('-')[1] !== undefined) {
        max = +price.split('-')[1].replace(/[^0-9]/g, '');
      } else {
        max = 100000000; // if max value is not set in filter, then set max value manually
      }
      if (min > priceMin) priceMin = min;
      if (max > priceMax) priceMax = max;
    });

    if (filters.categories.PRICE.length !== 0) {
      productsState = productsState.filter((product) => {
        return product.price >= priceMin && product.price <= priceMax;
      });
    }

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
