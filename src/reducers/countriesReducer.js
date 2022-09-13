import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  visibleCountries: false,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    isVisibleCountries: (state, action) => {
      state.visibleCountries = action.payload;
    },
  },
});

export const { setCountries, isVisibleCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
