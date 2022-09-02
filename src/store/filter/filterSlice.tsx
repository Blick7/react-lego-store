import { createSlice, current } from '@reduxjs/toolkit';

import { IInitialFilters } from './types';

const initialFilters: IInitialFilters = {
  categories: {
    PRODUCT_TYPE: [],
    PRICE: [],
    THEME: [],
    AGE: [],
    AVALIABILITY: [],
    PIECE_COUNT: [],
    FEATURED: [],
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
  },
});

export const { setFilter, removeFilter } = filterSlice.actions;

export default filterSlice.reducer;
