import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  active: false,
  type: 'loading' | 'error'
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    toggleAlert: (state, action) => {
      state.active = action.payload.active;

      state.type = action.payload.type;
      state.message = action.payload.message;
    }
  }
})

export const { toggleAlert } = alertSlice.actions;
export default alertSlice.reducer;