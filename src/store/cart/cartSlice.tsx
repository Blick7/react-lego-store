import { createSlice, current } from '@reduxjs/toolkit';
import ICart, { Product } from './types';

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
      // state.items = state.items.map((item) => {
      //   if (item.product.id === payload.product.id) {
      //     if (item.quantity > 10) return item;
      //     item.quantity++;
      //     state.totalQuantity += payload.quantity;
      //     state.totalAmount += payload.product.price * payload.quantity;
      //     return item;
      //   } else {
      //     console.log('hey', payload);
      //     state.items = [...state.items, payload];
      //     state.totalQuantity += payload.quantity;
      //     state.totalAmount += payload.product.price * payload.quantity;
      //     console.log(current(state));
      //     return item;
      //   }
      // });

      const payload = action.payload;

      let isUnique = true;
      let notUniqueIdx: number;
      for (let item of state.items) {
        if (item.product.id === payload.product.id) {
          isUnique = false;
          notUniqueIdx = state.items.indexOf(item);
        }
      }

      if (isUnique) {
        state.items = [...state.items, payload];
        state.totalQuantity += payload.quantity;
        state.totalAmount += payload.product.price * payload.quantity;
      } else {
        if (state.items[notUniqueIdx!].quantity >= 10) return;
        state.items[notUniqueIdx!].quantity++;
        state.totalQuantity += payload.quantity;
        state.totalAmount += payload.product.price * payload.quantity;
      }
    },
    removeItem: (state, action) => {
      const payload = action.payload;
      console.log(action.payload);

      if (payload.quantity === 100) {
        state.items = state.items.filter(
          (item) => item.product.id !== payload.product.id
        );
        state.totalQuantity = 0;
        state.totalAmount = 0;
      } else {
        state.totalQuantity -= 1;
        state.totalAmount -= payload.product.price;
      }

      state.items = state.items.map((item) => {
        if (item.product.id === payload.product.id) {
          console.log(item.product.id, payload.product.id);
          item.quantity -= payload.quantity;
          return item;
        }
        return item;
      });
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
