import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Product/ProductListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
