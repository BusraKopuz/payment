import { configureStore } from '@reduxjs/toolkit';
import packageReducer from '../redux/slices/packageSlice';
import loadingReducer from '../redux/slices/loginSlice';

export const store = configureStore({
  reducer: {
    package: packageReducer,
    user: loadingReducer,
  },
})