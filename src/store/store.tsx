import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products/productsSlice';
import filterReducer from './filter/filterSlice';
import cartReducer from './cart/cartSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
