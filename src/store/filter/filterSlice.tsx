import { createSlice, current } from '@reduxjs/toolkit';

import { IInitialFilters } from './types';

const initialFilters: IInitialFilters = {
  categories: {
    productType: [],
    price: [],
    theme: [],
    ages: [],
    avaliability: [],
    pieces: [],
    featured: [],
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilters,
  reducers: {
    setFilter: (state, action) => {
      const category = action.payload.category;
      const option = action.payload.option;
      // state[category as keyof typeof state].push(option);
      state.categories[category].push(option);
    },
    removeFilter: (state, action) => {
      const category = action.payload.category;
      const option = action.payload.option;
      state.categories[category] = state.categories[category].filter(
        (item) => item !== option
      );
    },
    resetFilter: (state) => {
      const categories = state.categories;
      for (let category in categories) {
        state.categories[category] = [];
      }
    },
  },
});

export const { setFilter, removeFilter, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
