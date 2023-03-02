import { createSlice } from '@reduxjs/toolkit';
import cartItems from './cartItems';

const initialState = {
  items: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increase: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      item.amount += 1;
    },
    decrease: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload.id);
      item.amount -= 1;
    },
    total: (state) => {
      let amount = 0;
      let total = 0;
      state.items.forEach((item) => {
        amount += item.amount;
        total += item.amount * Number(item.price);
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});

export const {
  clear, removeItem, increase, decrease, total,
} = cartSlice.actions;
export default cartSlice.reducer;
