import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

import { IinitialProducts } from './types';
import products from '../../products.json';

const initialProducts: IinitialProducts = {
  products: products,
  status: '',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://lego-store-d011a-default-rtdb.firebaseio.com/products.json'
      );
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {
    getProducts: (state) => {
      console.log(current(state));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      console.log(current(state));
      state.status = 'resolved';
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'rejected';
    });
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
