import { configureStore } from '@reduxjs/toolkit';
import cartReducer from 'app/features/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
