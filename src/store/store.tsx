import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import filterReducer from './filter/filterSlice';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
