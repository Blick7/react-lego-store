import { createSlice, current } from '@reduxjs/toolkit';
import setLocalStorage from '../../utils/setLocalStorage';
import ICart, { Item } from './types';

const localStorageCartItems = localStorage.getItem('itemsCart');
const localStorageItemsQuantity = localStorage.getItem('totalQuantityCart');
const localStorageItemsAmount = localStorage.getItem('totalAmountCart');
const parsedItems = JSON.parse(localStorageCartItems!);
const parsedQuantity = JSON.parse(localStorageItemsQuantity!);
const parsedAmount = JSON.parse(localStorageItemsAmount!);

const initialCart: ICart = {
  items: parsedItems || [],
  totalQuantity: parsedQuantity || 0,
  totalAmount: parsedAmount || 0,
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

      setLocalStorage(state);
    },
    removeItem: (state, action) => {
      const payload = action.payload;
      console.log(action.payload);

      if (payload.actionType === 'REMOVE_ALL') {
        state.items = state.items.filter(
          (item) => item.product.id !== payload.product.id
        );
        state.totalQuantity -= payload.quantity;
        state.totalAmount -= payload.quantity * payload.product.price;
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

      setLocalStorage(state);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
