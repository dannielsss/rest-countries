import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  countrys: [],
  loading: false,
};

export const countrysSlice = createSlice({
  name: 'countrys',
  initialState,
  reducers: {
    setCountrys: (state, action) => {
      state.countrys = action.payload;
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { setCountrys, isLoading } = countrysSlice.actions;
export default countrysSlice.reducer;
