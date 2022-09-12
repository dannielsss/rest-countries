import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countrys: [],
  visibleCountrys: false,
};

export const countrysSlice = createSlice({
  name: 'countrys',
  initialState,
  reducers: {
    setCountrys: (state, action) => {
      state.countrys = action.payload;
    },
    isVisibleCountrys: (state, action) => {
      state.visibleCountrys = action.payload;
    }
  },
});

export const { setCountrys, isVisibleCountrys } = countrysSlice.actions;
export default countrysSlice.reducer;
