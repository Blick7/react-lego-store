import { createSlice } from '@reduxjs/toolkit';

import { IinitialProducts } from './types';

const initialProducts: IinitialProducts[] = [
  {
    id: '75336',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: 25,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Home decor',
  },
  {
    id: '75331',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt959c93653cb028e3/75335.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: 99.99,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Sets',
  },
  {
    id: '75332',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: 99.99,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Home decor',
  },
  {
    id: '75333',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: 99.99,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Kids',
  },
  {
    id: '75334',
    title: 'Inquisitor Transport Scythe™ Inquisitor Transport ',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: 99.99,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Home decor',
  },
  {
    id: '75339',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    rating: 5,
    price: 99.99,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Kids',
  },
];

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {
    getProducts: (state) => {
      console.log(state);
    },
    setProducts: (state, payload) => {},
    // call sort func here
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
