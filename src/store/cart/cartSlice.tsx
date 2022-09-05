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
      state.items = [...state.items, payload.item];
      state.totalQuantity += payload.quantity;
      state.totalAmount += payload.item.price;
    },
    removeItem: (state, action) => {},
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
