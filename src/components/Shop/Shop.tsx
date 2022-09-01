import React from 'react';
import ShopFilters from './ShopFilters';
import ShopItem from './ShopItem';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import classes from './Shop.module.scss';

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
];

const Shop = () => {
  return (
    <section style={{ margin: '2rem 0', padding: '0 1rem' }}>
      <div style={{ display: 'flex' }}>
        <ShopFilters />
        <Box sx={{ flexGrow: 1 }}>
          <ul className={classes.items}>
            {items.map((item) => (
              <ShopItem key={item.id} item={item} />
            ))}
          </ul>
        </Box>
      </div>
    </section>
  );
};

export default Shop;
