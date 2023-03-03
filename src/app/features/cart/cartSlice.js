import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const URL = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  items: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems', async (_, thunkAPI) => {
  try {
    return fetch(URL)
      .then((res) => res.json());
  } catch (error) {
    return thunkAPI.rejectWithValue('Oops! Something went wrong');
  }
});

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
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  clear, removeItem, increase, decrease, total,
} = cartSlice.actions;
export default cartSlice.reducer;
