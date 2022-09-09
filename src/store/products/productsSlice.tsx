import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

import { IinitialProducts } from './types';

const initialProducts: IinitialProducts[] = [
  {
    id: '75336',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    rating: 5,
    price: 25,
    featured: '',
    pieces: 100,
    ages: '9+',
    PRODUCT_TYPE: 'Home decor',
    theme: 'Batman',
    age: '4+',
    avaliability: 'Coming Soon',
  },
  {
    id: '75331',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt959c93653cb028e3/75335.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt959c93653cb028e3/75335.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    rating: 5,
    price: 99.99,
    featured: 'Hard to find',
    pieces: 300,
    ages: '9+',
    PRODUCT_TYPE: 'Sets',
    theme: 'Star Wars',
    age: '4+',
    avaliability: 'Avaliable Now',
  },
  {
    id: '75332',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    rating: 4.5,
    price: 99.99,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Home decor',
    theme: 'Star Wars',
    age: '4+',
    avaliability: 'Avaliable Now',
  },
  {
    id: '75333',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    rating: 5,
    price: 99.99,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Kids',
    theme: 'Star Wars',
    age: '6+',
    avaliability: 'Coming Soon',
  },
  {
    id: '75334',
    title: 'Inquisitor Transport Scythe™ Inquisitor Transport',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    rating: 3,
    price: 99.99,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Home decor',
    theme: 'Batman',
    age: '4+',
    avaliability: 'Avaliable Now',
  },
  {
    id: '75339',
    title: 'Inquisitor Transport Scythe™',
    imgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=320&height=320&dpr=1',
    bigImgUrl:
      'https://www.lego.com/cdn/cs/set/assets/blt4d307a3c7a83a584/75336.png?fit=bounds&format=webply&quality=80&width=800&height=800&dpr=1',
    rating: 5,
    price: 99.99,
    featured: 'New',
    pieces: 924,
    ages: '9+',
    PRODUCT_TYPE: 'Kids',
    theme: 'Star Wars',
    age: '6+',
    avaliability: 'Avaliable Now',
  },
];

// const initialProducts: IinitialProducts = {
//   products: [],
//   status: null,
//   error: null,
// };

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(
      'https://lego-store-d011a-default-rtdb.firebaseio.com/products.json'
    );
    const data = response.json();
    return data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(current(state));
      state = action.payload;
      console.log(state);
    });
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
