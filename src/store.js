import { configureStore } from '@reduxjs/toolkit';
import countrysReducer from './reducers/countrysReducer';

export const store = configureStore({
  reducer: {
    countrys: countrysReducer,
  },
})