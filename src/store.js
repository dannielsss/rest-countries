import { configureStore } from '@reduxjs/toolkit';

import alertReducer from './reducers/alertReducer';
import countriesReducer from './reducers/countriesReducer';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    alert: alertReducer,
  },
})