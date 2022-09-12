import { configureStore } from '@reduxjs/toolkit';

import alertReducer from './reducers/alertReducer';
import countrysReducer from './reducers/countrysReducer';

export const store = configureStore({
  reducer: {
    countrys: countrysReducer,
    alert: alertReducer,
  },
})