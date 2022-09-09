import { createSlice } from '@reduxjs/toolkit';

const initialUser = {
  user: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = '';
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
