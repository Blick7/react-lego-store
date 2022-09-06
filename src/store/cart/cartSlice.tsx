import { createSlice, current } from '@reduxjs/toolkit';
import ICart from './types';

const initialCart: ICart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  initialState: initialCart,
  name: 'cart',
  reducers: {
    addItem: (state, action) => {
      const payload = action.payload;

      state.items = state.items.map((item) => {
        if (item.product.id === payload.product.id) {
          item.quantity++;
          state.totalQuantity += payload.quantity;
          state.totalAmount += payload.product.price * payload.quantity;
          return item;
        } else {
          state.items = [...state.items, payload];
          state.totalQuantity += payload.quantity;
          state.totalAmount += payload.product.price * payload.quantity;
          return item;
        }
      });

      if (state.items.length === 0) {
        state.items = [...state.items, payload];
        state.totalQuantity += payload.quantity;
        state.totalAmount += payload.product.price * payload.quantity;
      }
    },
    removeItem: (state, action) => {
      const payload = action.payload;
      state.items = state.items.filter(
        (item) => item.product.id !== payload.id
      );
      state.totalQuantity -= 1;
      state.totalAmount += payload.item.price;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
